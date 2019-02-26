let u1 = {
    name: 'Toto',
    passwd: '123'
  }
db.users.drop();
db.users.insert(u1);

let q1 = {
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
  }



  let q2 = {
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
  };
  

  db.quizzes.drop();
  db.quizzes.insert(q1);
  db.quizzes.insert(q2);