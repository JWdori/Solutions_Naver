const express = require('express');
const router = express.Router();
const models = require("../models")
const testdb = models.GAME_INFO;
const typedb = models.TYPE_INFO;
const userdb = models.USER_INFO;
const catdb = models.USER_DISLIKE;
const gamedb = models.GAME_INFO;
const recommenddb = models.GAME_RECOMMEND;
const {Op, Sequelize} = require("sequelize");
const cwr = require('../utils/createWebResponse');

const postTestResult = async (req, res) => {
    //유저 정보 받아서 회원 테이블에 insert (그 과정에서 선호하지 않는 게임까지 user 정보에 저장을 하자 -> 스키마 추가하기)
    //선택한 결과를 토대로 계산해서 해당 유형 db에서 받아와서 관련 정보를 반환하자
    //유저가 어떤 유형인지도 insert할때 한번에 해주자 그럼.

    const header = res.setHeader('Content-Type', 'application/json');
    const resultArr = req.body.result;
    const user = req.body.user;
    const categoryArr = req.body.category;
    res.header("Access-Control-Allow-Origin", "*")
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const browser = getBrowserInfo(userAgent);


    let RER = 0, NOM = 0, GRO = 0, FAS = 0, WAL = 0, FOL = 0, UND = 0, FAM = 0, COL = 0, PVP = 0;

    for (let i = 1; i < 13; i++) {
        if (i == 1) {
            if (resultArr[i] == 'a') FOL += 1;
            else NOM += 1;
            continue;
        }
        if (i == 2) {
            if (resultArr[i] == 'a') GRO += 0.5;
            else FAS += 1.01;
            continue;
        }
        if (i == 3) {
            if (resultArr[i] == 'a') GRO += 1, WAL += 2.98;
            else NOM += 1, RER += 1;
            continue;
        }
        if (i == 4) {
            if (resultArr[i] == 'a') PVP += 2.97;
            else NOM += 0.11, GRO += 0.49;
            continue;
        }
        if (i == 5) {
            if (resultArr[i] == 'a') RER += 1, GRO += 1;
            else NOM += 1, WAL -= 2.98;
            continue;
        }
        if (i == 6) {
            if (resultArr[i] == 'a') FOL += 0.99;
            else UND += 2.02;
            continue;
        }
        if (i == 7) {
            if (resultArr[i] == 'a') FAM += 2.02;
            else FOL += 1;
            continue;
        }
        if (i == 8) {
            if (resultArr[i] == 'a') FAS += 1.01;
            else COL += 1;
            continue;
        }
        if (i == 9) {
            if (resultArr[i] == 'a') RER += 1.1;
            continue;
        }
        if (i == 10) {
            if (resultArr[i] == 'a') WAL += 2.99, GRO += 0.5;
            else NOM += 0.5;
            continue;
        }
        if (i == 11) {
            if (resultArr[i] == 'a') FAS += 1.01;
            else COL += 1.98;
            continue;
        }
        if (i == 12) {
            if (resultArr[i] == 'a') FAM += 0.98;
            else UND += 0.98;
            continue;
        }
    }
    let types = [
        {type: 'RER', cnt: RER},
        {type: 'NOM', cnt: NOM},
        {type: 'GRO', cnt: GRO},
        {type: 'FAS', cnt: FAS},
        {type: 'WAL', cnt: WAL},
        {type: 'FOL', cnt: FOL},
        {type: 'UND', cnt: UND},
        {type: 'FAM', cnt: FAM},
        {type: 'COL', cnt: COL},
        {type: 'PVP', cnt: PVP},
    ];
    let result;

    // Year int 값의 크기순으로 정렬
    result = types.sort(function (a, b) {
        return b.cnt - a.cnt;
    });

    //결과 db에서 찾아오면된다,,
    const firstResult = await typedb.findOne({where: {type_id: result[0].type}});
    const secondResult = await typedb.findOne({where: {type_id: result[1].type}});
    const thirdResult = await typedb.findOne({where: {type_id: result[2].type}});


    //** 사용자를 insert하고
    //선호하지 않는 게임 장르도 insert해주자~
    userdb.create({
        user_id: user.userId,
        user_name: user.userName,
        user_ip: ip,
        user_date: Sequelize.literal('now()'),
        user_browser: browser,
        type_id: result[0].type
    }).then(async newUser => {
        //여기서 이제 새롭게 싫어하는 카테고리 테이블 인서트 쳐준다.
        //그리고 그 밑에서 return 웹 해주면 된다~~
        console.log(categoryArr)
        if (categoryArr.length > 0) {
            for (let i = 0; i < categoryArr.length; i++) {
                catdb.create({
                    user_id: user.userId,
                    category_id: categoryArr[i]
                })
            }
        }
        console.log(newUser);

        const game3 = await recommenddb.findAll({
            offset: 0,
            limit: 3,
            where: {user_type: newUser.type_id},
            attributes: ["appId", [models.sequelize.fn("sum", models.sequelize.col("game_recommend")), "score"]],
            group: "appId",
            order: [[models.sequelize.fn("sum", models.sequelize.col("game_recommend")), 'DESC']]
        })

        let appData = [];
        for (let j = 0; j < game3.length; j++) {
            const id = game3[j].appId;
            let app = await gamedb.findOne({where: {appId: id}});
            app.dataValues.w2pStar = game3[j].dataValues.score;
            appData.push(app)
        }
        return cwr.createWebResp(res, header, 200, {
            firstResult: firstResult,
            secondResult: secondResult,
            thirdResult: thirdResult,
            user: newUser,
            category: categoryArr,
            top3Game: appData
        });
    })
}

const getResult = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    // const {id} = req.query;
    const id = "age.of.civilizations2.jakowski.lukasz";
    let testResult = await testdb.findOne({where: {appId: id}});

    return cwr.createWebResp(res, header, 200, {
        message: "testing is completed, sending testResult!",
        testResult: testResult
    });

}

function getBrowserInfo(req) {
    const agent = req.toUpperCase();
    if (agent.indexOf('TRIDENT') >= 0) {
        return 'IE';
    } else if (agent.indexOf('FIREFOX') >= 0) {
        return 'FIREFOX';
    } else if (agent.indexOf('EDG') >= 0) {
        return 'EDGE';
    } else if (agent.indexOf('SAFARI') >= 0) {
        return 'SAFARI';
    } else if (agent.indexOf('CHROME') >= 0) {
        return 'CHROME';
    } else {
        return '';
    }
}

function uuid() {
    return Math.random().toString(36).substr(2) + (new Date()).getTime().toString(36);
}

module.exports = {postTestResult, getResult}