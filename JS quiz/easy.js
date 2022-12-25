const DATA = [
  /////////////// EASY ///////////////
  // Question 1
  {
    level: "Easy",
    question: "What instrument is used to study the sky?",
    answers: [
      {
        id: "1",
        value: "Telescope",
        correct: true,
      },

      {
        id: "2",
        value: " Astrograph",
        correct: false,
      },

      {
        id: "3",
        value: "Heliometer",
        correct: false,
      },

      {
        id: "4",
        value: "Diopter",
        correct: false,
      },
    ],
  },

  // Question 2
  {
    level: "Easy",
    question:
      "What is the name of a special apparatus that can move on the surface of the moon?",
    answers: [
      {
        id: "5",
        value: "R2-D2",
        correct: false,
      },

      {
        id: "6",
        value: "New Horizons",
        correct: false,
      },

      {
        id: "7",
        value: "moon rover",
        correct: true,
      },

      {
        id: "8",
        value: "Voskhod-1",
        correct: false,
      },
    ],
  },

  // Question 3
  {
    level: "Easy",
    question: "What is the name of the place from which rockets are launched?",
    answers: [
      {
        id: "9",
        value: "NASA",
        correct: false,
      },

      {
        id: "10",
        value: "Cappadocia",
        correct: false,
      },

      {
        id: "11",
        value: "SpaceX",
        correct: false,
      },

      {
        id: "12",
        value: "spaceport",
        correct: true,
      },
    ],
  },

  // Question 4
  {
    level: "Easy",
    question: "What was the name of the first astronaut?",
    answers: [
      {
        id: "13",
        value: "Yu. A. Gagarin",
        correct: true,
      },

      {
        id: "14",
        value: " Neil Armstrong",
        correct: false,
      },

      {
        id: "15",
        value: "Maria Tereshkova",
        correct: false,
      },

      {
        id: "16",
        value: "Jeff Bezos",
        correct: false,
      },
    ],
  },

  // Question 5
  {
    level: "Easy",
    question: "How many people first flew into space?1",
    answers: [
      {
        id: "17",
        value: "12.04.1900",
        correct: false,
      },

      {
        id: "18",
        value: "12.04.1961",
        correct: true,
      },

      {
        id: "19",
        value: "20.07.1969",
        correct: false,
      },

      {
        id: "20",
        value: "14.09.1945",
        correct: false,
      },
    ],
  },

  // Question 6
  {
    level: "Easy",
    question: "How many planets are in the solar system?",
    answers: [
      {
        id: "21",
        value: "6",
        correct: false,
      },

      {
        id: "22",
        value: "8",
        correct: true,
      },

      {
        id: "23",
        value: "9",
        correct: false,
      },

      {
        id: "24",
        value: "7",
        correct: false,
      },
    ],
  },

  // Question 7
  {
    level: "Easy",
    question: "The largest planet in the solar system?",
    answers: [
      {
        id: "25",
        value: "Jupiter",
        correct: true,
      },

      {
        id: "26",
        value: "Mars",
        correct: false,
      },

      {
        id: "27",
        value: "Earth",
        correct: false,
      },

      {
        id: "28",
        value: "Saturn",
        correct: false,
      },
    ],
  },

  // Question 8
  {
    level: "Easy",
    question: "The smallest planet in the solar system?",
    answers: [
      {
        id: "29",
        value: "Neptune",
        correct: false,
      },

      {
        id: "30",
        value: "Venus",
        correct: false,
      },

      {
        id: "31",
        value: "Mercury",
        correct: false,
      },

      {
        id: "32",
        value: "Pluto",
        correct: true,
      },
    ],
  },

  // Question 9
  {
    level: "Easy",
    question: "What is the name of the planet closest to the Sun?",
    answers: [
      {
        id: "33",
        value: "Saturn",
        correct: false,
      },

      {
        id: "34",
        value: "Mercury",
        correct: true,
      },

      {
        id: "35",
        value: "Mars",
        correct: false,
      },

      {
        id: "36",
        value: "Earth",
        correct: false,
      },
    ],
  },

  // Question 10
  {
    level: "Easy",
    question: "The name of the galaxy we live in?",
    answers: [
      {
        id: "37",
        value: " Andromeda",
        correct: false,
      },

      {
        id: "38",
        value: "Big Dipper",
        correct: false,
      },

      {
        id: "39",
        value: "Milky Way",
        correct: true,
      },

      {
        id: "40",
        value: "a lion",
        correct: false,
      },
    ],
  },
];

let localResults = {};

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

// Questions
const renderQuestions = (index) => {
  renderIndicator(index + 1);

  questions.dataset.currentStep = index;

  const renderAnswers = () =>
    DATA[index].answers
      .map(
        (answer) => `
            <li class="hover-radio">
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                 </label>
            </li>
        `
      )
      .join("");

  questions.innerHTML = `
        <div class="quiz-questions-item">
            <h1 class="${DATA[index].level} shadow_1 m-0">${
    DATA[index].level
  }</h1>

            <div class="quiz-questions-item_question mb-3 fs-5 mt-3 mx-2 text-info">
                ${DATA[index].question}
            </div>

            <ul class="quiz-questions-item_answers m-0 p-0 text-decoration-none">${renderAnswers()} </ul>
        </div>
    `;
};

//Results
const renderResults = () => {
  let content = "";

  const getClassname = (answer, questionIndex) => {
    let classname = "";

    if (!answer.correct && answer.id === localResults[questionIndex]) {
      classname = "text-danger";
    } else if (answer.correct) {
      classname = "text-success";
    }

    return classname;
  };

  const getAnswers = (questionIndex) =>
    DATA[questionIndex].answers
      .map(
        (answer) =>
          `<li class=${getClassname(answer, questionIndex)}>${
            answer.value
          }</li>`
      )
      .join("");

  DATA.forEach((question, index) => {
    content += `
        <div class="quiz-results-item">
            <div class="quiz-results-item_question">${question.question}</div>

            <ul class="quiz-results-item_answers m-0 p-0 text-decoration-none">${getAnswers(
              index
            )}</ul>
        </div>
        `;
  });

  results.innerHTML = content;
};

//Insicator
const renderIndicator = (currentStep) => {
  indicator.innerHTML = `
        ${currentStep}/${DATA.length}
    `;
};

// Логика ответа
quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    console.log("input");
    localResults[event.target.name] = event.target.value;
    btnNext.disabled = false;

    console.log(localResults);
  }
});

// Далее или с начала
quiz.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-next")) {
    const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

    if (DATA.length === nextQuestionIndex) {
      questions.classList.add("questions--hidden");
      indicator.classList.add("indicator--hidden");
      results.classList.add("results--visible");
      btnNext.classList.add("btn-next--hidden");
      btnRestart.classList.add("btn-restart--visible");

      renderResults();
    } else {
      renderQuestions(nextQuestionIndex);
    }

    btnNext.disabled = true;
  }

  if (event.target.classList.contains("btn-restart")) {
    localResults = {};
    results.innerHTML = "";

    questions.classList.remove("questions--hidden");
    indicator.classList.remove("indicator--hidden");
    results.classList.remove("results--visible");
    btnNext.classList.remove("btn-next--hidden");
    btnRestart.classList.remove("btn-restart--visible");

    renderQuestions(0);
  }
});

renderQuestions(0);
