const express = require('express');
const router = express.Router();
const models = require("../models")
const gamedb = models.GAME_INFO;
const subdb = models.GAME_SUBGENRE;
const dislikedb = models.USER_DISLIKE;
const recommenddb = models.GAME_RECOMMEND;
const stardb = models.GAME_RATING;
const userdb = models.USER_INFO;
const {Op, Sequelize} = require("sequelize");
const cwr = require('../utils/createWebResponse');
const {use} = require("express/lib/router");

const postGameRate = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*")
    const userId = req.body.userId;
    const appId = req.body.appId;
    const gameScore = req.body.gameScore;
    const userType = await userdb.findOne({where: {user_id: userId}});

    recommenddb.create({
        user_id: userId,
        user_type: userType.type_id,
        appId: appId,
        recommend_date: Sequelize.literal('now()'),
        game_recommend: gameScore
    }).then(data => {
        return cwr.createWebResp(res, header, 200, {
            message: "Inserted recommend to Database",
            data: data
        });
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while inserting recommend."
            });
        });

}


const postGameStar = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*")
    const userId = req.body.userId;
    const appId = req.body.appId;
    const gameStar = req.body.gameStar;
    const userType = await userdb.findOne({where: {user_id: userId}});
    let gameScore=0;
    if(gameStar>=4){
        gameScore+=1;
    }else if(gameStar==0 || gameStar==1){
        gameScore-=1;
    }



    recommenddb.create({
        user_id: userId,
        appId: appId,
        user_type: userType.type_id,
        recommend_date: Sequelize.literal('now()'),
        game_recommend: gameScore
    }).then(data => {
        return cwr.createWebResp(res, header, 200, {
            message: "Inserted recommend to Database",
            data: data
        });
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while inserting recommend."
            });
        });

    // stardb.create({
    //     user_id: userId,
    //     appId: appId,
    //     rate_date: Sequelize.literal('now()'),
    //     game_score: gameStar
    // }).then(data => {
    //     return cwr.createWebResp(res, header, 200, {
    //         message: "Inserted gameStar to Database",
    //         data: data
    //     });
    // })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while inserting recommend."
    //         });
    //     });

}

const getGameList = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*")
    const userId = req.query.user_id;
    const {page, size} = req.query;
    const {limit, offset} = getPagination(page, size);

    //게임 목록 가져오는데
    //사용자가 제외한 카테고리는 빼고 가져와야함
    //user_dislike에 해당 사용자가 싫어한 카테고리 가져와서 그 카테고리에 해당하는 게임들은 제외해야함..
    /*
        select *
        from GAME_INFO
        WHERE appId not in (select appId from GAME_SUBGENRE
                            where subgenre_id in (select category_id FROM USER_DISLIKE WHERE user_id='nafkwtt6e1bla6v72dx'))
			and
            appId not in (select appId from GAME_INFO
							where mainGenre  in (select category_id from USER_DISLIKE where user_id='nafkwtt6e1bla6v72dx'));
     */

    const subGenre = await dislikedb.findAll({where: {user_id: userId}, attributes: ['category_id']})
    let subGenreId = [];
    for (let i = 0; i < subGenre.length; i++) {
        if(subGenre[i].category_id==="교육∙\n퀴즈"){
            subGenreId.push("교육");
            subGenreId.push("퀴즈");
        }else{
            subGenreId.push(subGenre[i].category_id);
        }
        
    }

    const mainNotId = await gamedb.findAll({
        where: {mainGenre: {[Op.in]: subGenreId}},
        attributes: ['appId'],
        raw: true
    });

    const subNotId = await subdb.findAll({
        where: {subgenre_id: {[Op.in]: subGenreId}},
        attributes: ['appId'],
        raw: true
    });

    const merged = mainNotId.concat(subNotId);
    const except = merged.filter((item, pos) => merged.indexOf(item) === pos);
    let exceptId = [];
    for (let i = 0; i < except.length; i++) {
        exceptId.push(except[i].appId);
    }

    subdb.findAll({
        where: {appId: {[Op.notIn]: exceptId}},
    }).then(subGenre=>{
        gamedb.findAndCountAll({
            limit, offset,
            where: {appId: {[Op.notIn]: exceptId}},
            order: [["installs"]]
        })
            .then(data => {

                for (let i = 0; i < data.rows.length; i++) {
                    data.rows[i].dataValues.subGenre=[];
                    for (let j = 0; j < subGenre.length; j++) {
                        if(data.rows[i].appId===subGenre[j].appId){
                            data.rows[i].dataValues.subGenre.push(subGenre[j].subgenre_id)
                        }
                    }
                }
                const response = getPagingData(data, page, limit);
                res.send(response);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving gameList."
                });
            });

    })


}
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return {limit, offset};
};

const getPagingData = (data, page, limit) => {
    const {count: totalItems, rows: gameList} = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return {totalItems, gameList, totalPages, currentPage};
};


module.exports = {postGameRate, postGameStar, getGameList}