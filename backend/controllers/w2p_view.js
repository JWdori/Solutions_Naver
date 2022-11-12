const express = require('express');
const router = express.Router();
const models = require("../models")
const testdb = models.GAME_INFO;
const userdb = models.USER_INFO;
const recommenddb = models.GAME_RECOMMEND;
const stardb = models.GAME_RATING;
const gamedb = models.GAME_INFO;
const cwr = require('../utils/createWebResponse');

const getRateGame = async (req, res) => {
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
        for (let j = 0; j < types[i].data.length; j++) {
            const id = types[i].data[j].appId;
            appData[i].app = await gamedb.findOne({where: {appId:id}});
        }
    }

    //** 모든 타입의 더미데이터를 넣어놔야 돌아가는 코드임!!!!!!!!!!!
    //무족권 무족권 데이터 쌓아놓자,,^^~
    res.send(appData);

}


const getStarGame = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const typeId = req.body.result;
    res.header("Access-Control-Allow-Origin", "*")

}
module.exports = {getRateGame, getStarGame}