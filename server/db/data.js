db.users.drop();
db.users.insert({
  name: 'Admin',
  passwd: 'admin',
  email: 'admin@admin.com',
  questions: 0
});

db.firstperiods.drop();
db.firstperiods.insert({
question: "The surname da Vinci is an indicator of birthplace.",
video: null,
txtAnswers: ["True","False"],
imgAnswers: [],
solutions: [0],
points: 1,
tip: 'Leonardo had no surname in the modern sense – "da Vinci" simply meaning "of Vinci", which is his birthplace.'
});

db.firstperiods.insert({
question: "Leonardo’s father had married four times. Which is the first legitimate wife?",
video: null,
txtAnswers: ["Albiera Amadori","Francesca Lanfredini", "Caterina", "Lucrezia Cortigiani"],
imgAnswers: [],
solutions: [0],
points: 1,
tip: "The first legitimate wife of his father is Albiera Amadori, who loved Leonardo but died young in 14565 without children."
});

db.firstperiods.insert({
question: "How many half-siblings did he had ?",
video: null,
txtAnswers: ["11","12","13","14"],
imgAnswers: [],
solutions: [1],
points: 1,
tip: "In all, Leonardo had twelve half-siblings, who were much younger than he was (the last was born when Leonardo was forty years old) and with whom he had very few contacts, but they caused him difficulty after his father's death in the dispute over the inheritance."
});

db.firstperiods.insert({
question: "When Leonardo was young, in which subjects did he educated? ",
video: null,
txtAnswers: ["Latin, geometry and mathematics","Latin, mathematics and science",'French, geometry and mathematics',"Latin, science and geometry"],
imgAnswers: [],
solutions: [0],
points: 1,
tip: "Leonardo received an informal education in Latin, geometry and mathematics in his childhood."
});

db.firstperiods.insert({
question: "In 1466, Leonardo was apprenticed by who?",
video: null,
txtAnswers: ["Perugino","Domenico Ghirlandaio","Andrea del Verrocchio","Lorenzo di Credi"],
imgAnswers: [],
solutions: [2],
points: 1,
tip: 'In 1466, at the age of 14, Leonardo was apprenticed to the artist Andrea di Cione, known as Verrocchio, whose bottega (workshop) was "one of the finest in Florence"'
});

db.firstperiods.insert({
  question: "Which of the following skill is NOT theoretical trained by Leonardo while apprenticed to Andrea del Verrocchio?",
  video: null,
  txtAnswers: ["Metallurgy","Plaster casting","Sculpting","Writing"],
  imgAnswers: [],
  solutions: [3],
  points: 1,
  tip: 'Leonardo would have been exposed to both theoretical training and a vast range of technical skills, including drafting, chemistry, metallurgy, metal working, plaster casting, leather working, mechanics and carpentry as well as the artistic skills of drawing, painting, sculpting and modelling.'
  });

db.quizzes.drop();
/*db.quizzes.insert({
    name: 'Quizz 1',
    icon: 'quizz1/quizz1.jpg',
    keywords: ['Kitchen', 'English'],
    questions: [{
      question: 'Where is Brian ?',
      video: null,
      txtAnswers: ["In the living room", "In the kitchen", "In the garden", "In the bathroom"],
      imgAnswers: [],
      solutions: [1, 2],
      points: 3
    }, {
      question: 'Where is Jenny, the sister of Brian?',
      video: null,
      txtAnswers: [],
      imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
      solutions: [0],
      points: 3
    }, {
      question: 'Who is Brian?',
      video: null,
      txtAnswers: ["A girl", "A boy"],
      imgAnswers: [],
      solutions: [1],
      points: 1
    }],
    published: true,
    owner: db.users.findOne({name:'Toto'}),
    scores: []
  });
  db.quizzes.insert({
    name: 'Quizz 2',
    icon: 'quizz2/aix.jpg',
    keywords: ['Aix', 'Tourisme'],
    questions: [{
      question: 'Where is Aix en Provence?',
      video: null,
      txtAnswers: ["In the north of France", "In the south of Italy", "In the south of France"],
      imgAnswers: [],
      solutions: [2],
      points: 1
    }, {
      question: 'What is the rotonde?',
      video: null,
      txtAnswers: [],
      imgAnswers: ['quizz2/granet1.jpg', 'quizz2/sauveur2.jpg', 'quizz2/aix.jpg', 'quizz2/rotonde.jpg'],
      solutions: [2, 3],
      points: 3
    }],
    published: true,
    owner: db.users.findOne({name:'Toto'}),
    scores: []
  });*/