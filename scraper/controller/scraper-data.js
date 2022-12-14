const express = require('express');
const gPlay = require('google-play-scraper');
const axios = require("axios");
const cheerio = require("cheerio");
const url = require("url");

const game = [
    'GAME_ACTION',
    'GAME_ADVENTURE',
    'GAME_ARCADE',
    'GAME_BOARD',
    'GAME_CARD',
    'GAME_CASINO',
    'GAME_CASUAL',
    'GAME_EDUCATIONAL',
    'GAME_MUSIC',
    'GAME_PUZZLE',
    'GAME_RACING',
    'GAME_ROLE_PLAYING',
    'GAME_SIMULATION',
    'GAME_SPORTS',
    'GAME_STRATEGY',
    'GAME_TRIVIA',
    'GAME_WORD']

const gApp = async (req, res) => {
    gPlay.app({
        // appId: 'com.dxx.firenow',
        appId: 'jp.pokemon.pokemonunite',
        lang: 'ko'
    }).then(result => {
        // const result = res;
        console.log(result)
        res.send(result)
    });
}

const gList = async (req, res) => {
    const number = 600;
    let appData = [];
    gPlay.list({
        category: gPlay.category.GAME_SPORTS,
        collection: gPlay.collection.TOP_FREE,
        num: number,
        lang: "ko",
        country: "kr",
        fullDetail: true
    }).then(async listResult => {
        await Promise.all(listResult.map(async (app) => {
            try {
                const dateResult = await gPlay.reviews({
                    appId: app.appId,
                    sort: gPlay.sort.NEWEST,
                    num: 1,
                    lang: "ko",
                    country: "kr",
                }).then(reviewResult => {
                    if (reviewResult.data[0] != null) {
                        const rDate = reviewResult.data[0].date;
                        const strArr = rDate.split('-');
                        return strArr[0] === '2022' && (strArr[1] === '09');
                    }

                });
                if (dateResult === true) {
                    let genreList = [];
                    try {
                        await axios({
                            url: app.url,
                            method: "GET",
                            responseType: "arraybuffer",
                        }).then(async (html) => {
                            const $ = cheerio.load(html.data);
                            const list = $("span.VfPpkd-vQzf8d");
                            await list.each(async (i, tag) => {	// ???????????? ????????????????????? each??? ??????
                                let aria = $(tag).attr("aria-hidden");
                                let genre = $(tag).text();
                                if (aria === "true" &&
                                    (!genre.includes("??????") &&
                                        !genre.includes("???????????????") &&
                                        !genre.includes("????????????"))
                                    && genre !== app.genre) {
                                    genreList.push(genre)
                                }
                            })

                        });
                    } catch (error) {
                        console.log(error)
                        return error;
                    }

                    appData.push({
                        appId: app.appId,
                        url: app.url,
                        title:app.title,
                        description:app.description,
                        summary:app.summary,
                        installs:app.installs,
                        scoreText:app.scoreText,
                        reviews:app.reviews,
                        price:app.price,
                        free:app.free,
                        currency:app.currency,
                        priceText:app.priceText,
                        icon:app.icon,
                        headerImage:app.headerImage,
                        contentRating:app.contentRating,
                        genreId:app.genreId,
                        mainGenre:app.genre,
                        subGenre:genreList
                    });

                }
            } catch (e) {
                console.log(e)
            }
        }))


        console.log("?????? ?????? " + appData.length)
        res.send(appData);


    });

}

const gReview = async (id) => {
    await gPlay.reviews({
        appId: id,
        sort: gPlay.sort.NEWEST,
        num: 1,
        lang: "ko",
        country: "kr",
    }).then(result => {
        const rDate = result.data[0].date;
        console.log(rDate)
        const strArr = rDate.split('-');
        if (strArr[0] === '2022' && (strArr[1] === '09')) {
            return true;
        }
        return false;
    });
}

const moreGenre = async (url) => {
    let genreList = [];
    try {
        await axios({
            url: url,
            method: "GET",
            responseType: "arraybuffer",
        }).then(async (html) => {
            const $ = cheerio.load(html.data);
            const list = $("span.VfPpkd-vQzf8d");
            await list.each(async (i, tag) => {	// ???????????? ????????????????????? each??? ??????
                let aria = $(tag).attr("aria-hidden");
                let genre = $(tag).text();
                if (aria === "true" &&
                    (!genre.includes("??????") &&
                        !genre.includes("???????????????") &&
                        !genre.includes("????????????"))) {
                    genreList.push(genre);
                }
            })
            console.log(genreList);
            return genreList;
        });
    } catch (error) {
        console.log(error)
        return error;
    }

};


module.exports = {gApp, gList, gReview, moreGenre}