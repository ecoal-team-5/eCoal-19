const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizzes = db.quizzes;
const FirstPeriod = db.firstPeriod;

const protect = (req, res, f) => {
  if (!req.headers || !req.headers.username || !req.headers.password) {
      res.json({isConnected: false});
      return;
  }
  Users.findOne({username: req.headers.username, password: req.headers.password})
      .exec((err, data) => {
          if (err) console.log("error", err);
          else {
              if (data) f(req, res);
              else res.json({isConnected: false})
          }
        }
      )
    };


router
  .use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded

  .get("/users", (req, res) => {
    protect(req, res, () =>
      Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      }
    ))
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
  .post("/addFirstPeriod", (req, res) => {
    const q = new FirstPeriod(req.body);    // The json object is the body of the request
   console.log(q);
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })   

  .post("/addSecondPeriod", (req, res) => {
    const q = new SecondPeriod(req.body);    // The json object is the body of the request
   console.log(q);
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })    

  .post("/addThirdPeriod", (req, res) => {
    const q = new ThirdPeriod(req.body);    // The json object is the body of the request
   console.log(q);
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })       
  .post('/upload', (req, res) => {
    req.files.file.mv(__dirname + '/resources/pictures/' + req.files.file.name,
        (err) => {
          if (err)
            return res.status(500).send(err);
          res.json({file: req.files.file.name});
        }
      )

  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  })
  
  
  })   ;


module.exports = router;
