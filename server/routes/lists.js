var express = require('express');
var router = express.Router();
var superpower = require('../models/superpower');

router.get('/', function (req, res) {
    superpower.find({}, function (err, powers) {
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }

      res.send(powers);
    });
});

router.post('/', function (req, res) {

});


module.exports = router;
