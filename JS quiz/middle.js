const DATA = [
  /////////////// MIDDLE ///////////////
  // Question 1
  {
    level: "Middle",
    question: "Which planet is known for having a red spot on its surface?",
    answers: [
      {
        id: "71",
        value: "Jupiter",
        correct: true,
      },

      {
        id: "72",
        value: "Mars",
        correct: false,
      },

      {
        id: "73",
        value: "Venus",
        correct: false,
      },
    ],
  },

  // Question 2
  {
    level: "Middle",
    question: "Which planet is the hottest in our solar system?",
    answers: [
      {
        id: "74",
        value: "Mars",
        correct: false,
      },

      {
        id: "75",
        value: "Mercury",
        correct: false,
      },

      {
        id: "76",
        value: "Venus",
        correct: true,
      },
    ],
  },

  // Question 3
  {
    level: "Middle",
    question: "What is the name of NASA 's most famous telescope?",
    answers: [
      {
        id: "77",
        value: "Webb",
        correct: false,
      },

      {
        id: "78",
        value: "Hubble",
        correct: true,
      },

      {
        id: "79",
        value: "Iras",
        correct: false,
      },
    ],
  },

  // Question 4
  {
    level: "Middle",
    question: "What is the name of the largest moon of Saturn?",
    answers: [
      {
        id: "80",
        value: "Iapetus",
        correct: false,
      },

      {
        id: "81",
        value: "Phoebe",
        correct: false,
      },

      {
        id: "82",
        value: "Titanium",
        correct: true,
      },
    ],
  },

  // Question 5
  {
    level: "Middle",
    question:
      "Olympus is a huge mountain of volcanic origin. What planet is she on?",
    answers: [
      {
        id: "83",
        value: "Mars",
        correct: true,
      },

      {
        id: "84",
        value: "Earth",
        correct: false,
      },

      {
        id: "85",
        value: "Uranium",
        correct: false,
      },
    ],
  },

  // Question 6
  {
    level: "Middle",
    question: "The constellation Cassiopeia is named after...",
    answers: [
      {
        id: "86",
        value: "legendary Ethiopian queen",
        correct: true,
      },

      {
        id: "87",
        value: " Egyptian pharaoh Tutankhamun's wife",
        correct: false,
      },

      {
        id: "88",
        value: "daughters of an old Russian prince",
        correct: false,
      },
    ],
  },

  // Question 7
  {
    level: "Middle",
    question: "The first vegetable grown in space was...",
    answers: [
      {
        id: "89",
        value: "horseradish",
        correct: false,
      },

      {
        id: "90",
        value: "cucumber",
        correct: false,
      },

      {
        id: "91",
        value: "potato",
        correct: true,
      },
    ],
  },

  // Question 8
  {
    level: "Middle",
    question:
      "Which planet in the solar system has recently been demoted to a dwarf planet by the International Astronomical Union?",
    answers: [
      {
        id: "92",
        value: "Neptune",
        correct: false,
      },

      {
        id: "93",
        value: "Mercury",
        correct: false,
      },

      {
        id: "94",
        value: "Pluto",
        correct: true,
      },
    ],
  },

  // Question 9
  {
    level: "Middle",
    question: "Who was the first scientist to use a telescope?",
    answers: [
      {
        id: "95",
        value: "Archimedes",
        correct: false,
      },

      {
        id: "96",
        value: "Galileo",
        correct: true,
      },

      {
        id: "97",
        value: "Copernicus",
        correct: false,
      },
    ],
  },

  // Question 10
  {
    level: "Middle",
    question: 'The name of the most "beautiful" planet in the solar system:',
    answers: [
      {
        id: "98",
        value: "Venus",
        correct: true,
      },

      {
        id: "99",
        value: "Neptune",
        correct: false,
      },

      {
        id: "100",
        value: "Earth",
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

            <div class="quiz-questions-item_question mb-3 mt-3 fs-5 mx-2 text-info">
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
            <div class="quiz-results-item_question mb-2 fs-4">${
              question.question
            }</div>

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
