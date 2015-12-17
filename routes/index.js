var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {tasks: null});
});

router.post('/add-task', function(req, res) {
  models.Tasks
        .build({
            title: req.body.taskName,
            completed: false})
        .save()
        .then(function() {
          models.Tasks.findAll({}).then(function(taskList) {
                res.render('index', {tasks: taskList});
            });
        });
});

module.exports = router;
