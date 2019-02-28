const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db connexion
mongoose.connect('mongodb://localhost/quizz',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to", db.client.s.url);
});

// database collections
const usersSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  questions: Number
});

const firstPeriodSchema = mongoose.Schema({
  question: String,
  video: String,
  txtAnswers: [String],
  imgAnswers: [String],
  solutions: [Number],
  points: Number,
  tip: String
});

const secondPeriodSchema = mongoose.Schema({
  question: String,
  video: String,
  txtAnswers: [String],
  imgAnswers: [String],
  solutions: [Number],
  points: Number,
  tip: String
});

const thirdPeriodSchema = mongoose.Schema({
  question: String,
  video: String,
  txtAnswers: [String],
  imgAnswers: [String],
  solutions: [Number],
  points: Number,
  tip: String
});

// exports
const Users = mongoose.model('Users', usersSchema);
const FirstPeriod = mongoose.model('FirstPeriod', firstPeriodSchema);
const SecondPeriod = mongoose.model('SecondPeriod',secondPeriodSchema);
const ThirdPeriod = mongoose.model('ThirdPeriod', thirdPeriodSchema);

module.exports = {};
module.exports.users = Users;
module.exports.firstPeriod = FirstPeriod;
module.exports.secondPeriod = SecondPeriod;
module.exports.thirdPeriod = ThirdPeriod;
