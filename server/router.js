const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizzes = db.quizzes;
const FirstPeriod = db.firstPeriod;


router
  .use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded
  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      })
  })
  .get("/firstPeriod", (req, res) => {
    console.log(1,FirstPeriod);
    FirstPeriod
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else {console.log("data",data);
        res.json(data);
        }
      })
  }).
  get("/quizz/:id", (req, res) => {
    console.log("Route ", req.params.id);
    Quizzes.findOne({
        _id: req.params.id
    }).exec((err, data) => {
        if (err) return res.status(500).send(err);
        else res.json(data);
    });
  })  
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
