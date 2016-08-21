var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('./connect');

router.get('/cohorts', function(req, res) {

});

router.get('/recruiters', function(req, res) {

});

router.get('/students', function(req, res) {

});

router.get('/students/:cohortID', function(req, res) {
  var cohortID = req.cohortID;
});

router.put('/event', function(req, res) {
  var event = {
    name: req.name,
    startTime: req.startTime
    // I need to make sure this is getting passed in on the front end
  };
});

router.put('/recruiter', function(req, res) {
  var recruiter = {
    name: req.name,
    email: req.email,
    company: req.company
  };
});

router.put('/schedule', function(req, res) {
  // I will probably outsource this functionality to another file
});

router.put('/student', function(req, res) {
  var student = {
    name: req.name,
    email: req.email,
    company: req.company
  }
});

