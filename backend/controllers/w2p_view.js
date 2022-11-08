const express = require('express');
const router = express.Router();
const models = require("../models")
const testdb = models.GAME_INFO;
const recommenddb = models.GAME_RECOMMEND;
const stardb = models.GAME_RATING;
const cwr = require('../utils/createWebResponse');

const getRateGame = async (req, res) => {
    // api/view/getRatedGame?typeId

    const header = res.setHeader('Content-Type', 'application/json');
    const typeId = req.body.result;
    res.header("Access-Control-Allow-Origin", "*")


    // select appId,sum(game_recommend) as score,type_id
    // from GAME_RECOMMEND natural join USER_INFO
    // group by type_id;

     recommenddb.findAll({
        include: ["USER_INFO"],
        attributes: ["appId", [models.sequelize.fn("sum", "game_recommend"), "score"], "type_id"],
        group: "type_id",
    }).then(data => {
         return cwr.createWebResp(res, header, 200, {
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


const getStarGame = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const typeId = req.body.result;
    res.header("Access-Control-Allow-Origin", "*")

}
module.exports = {getRateGame,getStarGame}