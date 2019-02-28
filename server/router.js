const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizzes = db.quizzes;


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
  .get("/quizzes", (req, res) => {
    console.log(1);
    Quizzes
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      })
  })
  .get("/quizz/:id", (req, res) => {
    console.log("Route ", req.params.id);
    Quizzes.findOne({
        _id: req.params.id
    }).exec((err, data) => {
        if (err) return res.status(500).send(err);
        else res.json(data);
    });
  })
  .post("/login", (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.json({isConnected: false})
    } else {
        Users.findOne({name: req.body.username, passwd: req.body.password})
            .exec((err, data) => {
                if (err) console.log("error", err);
                else {
                    if (data) res.json({isConnected: true});
                    else res.json({isConnected: false})
                }
            })
    }
  })
  .post("/signUp", (req, res) => {
      if (!req.body.username || !req.body.password) {
          res.json({isConnected: false})
      } else {
          Users.findOne({name: req.body.username})
              .exec((err, data) => {
                  if (err) console.log("error", err);
                  else {
                      if (data) res.json({isConnected: false});
                      else {
                          const user = new Users({name: req.body.username, passwd: req.body.password});
                          user.save()
                              .then(() => res.json({isConnected: true}))
                              .catch(err => res.status(400).send("Unable to save to database:", err))
                      }
                  }
              })
      }
  })
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
