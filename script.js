const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

iq = 100
good = 0
bad = 0
question = 0
question5 = 1
played = 0
let questions1, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  console.log(questions)
  question5 += 1
   console.log(good, bad)
  if (question5 > 8){
    
    startButton.innerText = 'Finish'
    startButton.classList.remove('hide')

  }
  
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  questions1 = questions.sort()
  question = 0
  question5 = 0
  currentQuestionIndex = 0
  if (played == 1){
    questions.pop()
    iq = 100
good = 0
bad = 0
    played = 0
  }
  
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(questions1[currentQuestionIndex])
  question += 1
 
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  
  while (answerButtonsElement.firstChild) {
    
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  if (questions1.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
   
  } else {
    
   
  }
}

function setStatusClass(element, correct) {
  
 
   
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    
    good += 1
    
  } else {
    element.classList.add('wrong')
    
   
    bad += 1
    
  }

  if (question >= 9){
     played = 1
      iq += (good-bad)*5
      if (iq < 70){
        iq = 70
      }
     
     
     questions.push({
    question: "Your iq is: "+iq,
    
  },)
 
 
   
  }
 
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [

  {
    question: "You are bob, dylan is bob's father's father, Who is dylan?",
    answers: [
      { text: 'Grandpa', correct: true },
      { text: 'Grandson', correct: false},
      { text: 'Dad', correct: false },
      { text: 'Brother', correct: false }
    ]
  },

  
  {
    question: "Mackenzie is triple her sister's age today. Her sister was three 5 years ago. how old was Mackenzie when her sister was three?",
    answers: [
      { text: '24', correct: false },
      { text: '18', correct: false},
      { text: '19', correct: true },
      { text: '21', correct: false }
    ]
  },

   {
    question: "What is the last digit of the number 4^572831 (No calculator or mental math needed)",
    answers: [
      { text: '6', correct: false },
      { text: '4', correct: true},
      { text: '2', correct: false },
      { text: '8', correct: false }
    ]
  },

  
  {
    question: "A stack of money is double every day, it took the stack of money to get half way to the moon 28 days, on what day will the stack of money reach the moon?",
    answers: [
      { text: '29', correct: true },
      { text: '56', correct: false},
      { text: '112', correct: false },
      { text: '104', correct: false }
    ]
  },

   {
    question: "Finish the number 1,2,4,8,6,2,",
    answers: [
      { text: '4', correct: true },
      { text: '6', correct: false},
      { text: '8', correct: false },
      { text: '16', correct: false }
    ]
  },

  
  {
    question: "There are 25 blocks on a 5x5 grid, each block is 1 meter in length and width. Is it possible to move EXACTLY 5 meters on the grid?",
    answers: [
      { text: 'No', correct: false },
      { text: 'Yes', correct: true},
    ]
  },

   {
    question: "You pour 1/3rd of your full drink into a cup that is 1/6th the size of your cup, how much drink are in the cups in total?", 
    answers: [
      { text: '1', correct: false },
      { text: '4/6ths', correct: false},
      { text: '5/6ths', correct: true },    
      { text: '2/3rds', correct: false},    
    ] 
  },
   {
    question: "On a circular racetrack that is 1 mile long, a racecar travels 50 mph and another travels 200 mph, there are 10 laps how many times does the racecar that goals 200 mph pass the 50mph?",
    answers: [
      { text: '30', correct: true },
      { text: '40', correct: false},
      { text: '10', correct: false },
      { text: '20', correct: false},
    ] 
  },

   {
    question: "A rocket league player named Xay had his inventory hacked, there were 3 suspects who he had never contacted before and they have never contacted him before, Brown Bones, Rapid, and RedEye420. The first player said \"I never touched your account.\", The second player said \"I know you just hit GC I would never hack you.\" The third player said \"I hack most of the time, but I didn\'t hack you\", Who hacked Xay\'s rocket league account? ",
    answers: [
      { text: 'RedEye420', correct: false },
      { text: 'Rapid', correct: true},
      { text: 'Brown Bones', correct: false },
      { text: 'Xay', correct: false},
    ] 
  },
   
  
 
]