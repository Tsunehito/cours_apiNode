let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'Api works',
        message: 'Welcome to Restful Api'
    });
});

module.exports = router;