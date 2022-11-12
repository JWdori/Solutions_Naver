const express = require('express');
const router = express.Router();
const viewController = require('../../controllers/w2p_view')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a view');
});

router.get('/getRateGame',viewController.getRateGame);
router.get('/getStarGame',viewController.getStarGame)

module.exports = router;
