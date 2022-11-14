const express = require('express');
const router = express.Router();
const models = require("../models")
const testdb = models.GAME_INFO;
const userdb = models.USER_INFO;
const recommenddb = models.GAME_RECOMMEND;
const stardb = models.GAME_RATING;
const gamedb = models.GAME_INFO;
const cwr = require('../utils/createWebResponse');

const getRateGameByType = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*")


    // select appId,sum(game_recommend) as score,type_id
    // from GAME_RECOMMEND natural join USER_INFO
    // group by type_id;
    let types = [
        {type: 'RER'},
        {type: 'NOM'},
        {type: 'GRO'},
        {type: 'FAS'},
        {type: 'WAL'},
        {type: 'FOL'},
        {type: 'UND'},
        {type: 'FAM'},
        {type: 'COL'},
        {type: 'PVP'},
    ];

    for (let i = 0; i < types.length; i++) {
        types[i].data = await recommenddb.findAll({
            offset: 0,
            limit: 10,
            attributes: ["appId", [models.sequelize.fn("sum", models.sequelize.col("game_recommend")), "score"], "user_type"],
            where: {"user_type": types[i].type},
            group: "appId",
            order: [[models.sequelize.fn("sum", models.sequelize.col("game_recommend")), 'DESC']]
        })
    }

    let appData = [
        {type: 'RER',app:[]},
        {type: 'NOM',app:[]},
        {type: 'GRO',app:[]},
        {type: 'FAS',app:[]},
        {type: 'WAL',app:[]},
        {type: 'FOL',app:[]},
        {type: 'UND',app:[]},
        {type: 'FAM',app:[]},
        {type: 'COL',app:[]},
        {type: 'PVP',app:[]},
    ];


    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < types[i].data.length; j++) {
            const id = types[i].data[j].appId;
            appData[i].app.push(await gamedb.findOne({where: {appId: id}}));
        }
    }

console.log(appData);
    //** 모든 타입의 더미데이터를 넣어놔야 돌아가는 코드임!!!!!!!!!!!
    //무족권 무족권 데이터 쌓아놓자,,^^~
    res.send(appData);

}


const getRateGameTop3 = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*")
    //유형상관없이 1,2,3위 가져오는

    const data = await recommenddb.findAll({
        offset: 0,
        limit: 3,
        attributes: ["appId", [models.sequelize.fn("sum", models.sequelize.col("game_recommend")), "score"]],
        group: "appId",
        order: [[models.sequelize.fn("sum", models.sequelize.col("game_recommend")), 'DESC']]
    })

    let appData = [];
    for (let j = 0; j < data.length; j++) {
        const id = data[j].appId;
        let app = await gamedb.findOne({where: {appId: id}});
        app.dataValues.w2pStar=data[j].dataValues.score;
        appData.push(app)
    }
    res.send(appData);
}

const getStarGame = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const typeId = req.body.result;
    res.header("Access-Control-Allow-Origin", "*")

}
module.exports = {getRateGameByType, getStarGame, getRateGameTop3}