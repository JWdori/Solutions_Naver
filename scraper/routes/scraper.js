const express = require('express');
const router = express.Router();
const scController = require('../controller/scraper-data')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with scraper ');
});
router.get('/app',scController.gApp)
router.get('/list',scController.gList)
router.get('/review',scController.gReview)
router.get('/more',scController.moreGenre)

module.exports = router;