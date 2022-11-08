const express = require('express');
const router = express.Router();
const recommendController = require('../../controllers/w2p_recommend')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a test');
});

router.post('/postGameRate',recommendController.postGameRate);
router.post('/postGameStar',recommendController.postGameStar)
router.get('/getGameList',recommendController.getGameList)

module.exports = router;
