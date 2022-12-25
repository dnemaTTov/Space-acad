const DATA = [
  /////////////// HARD ///////////////
  // Question 1
  {
    level: "Hard",
    question: "Pomors called the North Star ...",
    answers: [
      {
        id: "71",
        value: "rivet-star",
        correct: false,
      },

      {
        id: "72",
        value: "funny star",
        correct: true,
      },

      {
        id: "73",
        value: "bummer-star",
        correct: false,
      },
    ],
  },

  // Question 2
  {
    level: "Hard",
    question: "The moon of Uranus is named after Shakespeare's heroine...",
    answers: [
      {
        id: "74",
        value: "Desdemona",
        correct: false,
      },

      {
        id: "75",
        value: "Juliet",
        correct: false,
      },

      {
        id: "76",
        value: "Ophelia",
        correct: true,
      },
    ],
  },

  // Question 3
  {
    level: "Hard",
    question:
      "The first artificial object in history to reach the boundaries of outer space is ...",
    answers: [
      {
        id: "77",
        value: " V-2 rocket",
        correct: true,
      },

      {
        id: "78",
        value: "Munchausen on a cannonball",
        correct: false,
      },

      {
        id: "79",
        value: "Yuri Gagarin's lighter",
        correct: false,
      },
    ],
  },

  // Question 4
  {
    level: "Hard",
    question:
      "As a result of the crash, all seven members of the Columbia shuttle crew died, but survived after the disaster ...",
    answers: [
      {
        id: "80",
        value: " cockroaches accidentally on board",
        correct: false,
      },

      {
        id: "81",
        value: "goldfish taken on board for the relaxation of the astronauts",
        correct: false,
      },

      {
        id: "82",
        value: "roundworms, which were supposed to be tested in weightlessness",
        correct: true,
      },
    ],
  },

  // Question 5
  {
    level: "Hard",
    question:
      "In the northern hemisphere of the sky, the constellation has the most original name ...",
    answers: [
      {
        id: "83",
        value: "Veronica's hair",
        correct: true,
      },

      {
        id: "84",
        value: "Bald head of Antonina",
        correct: false,
      },

      {
        id: "85",
        value: "Leopold Wig",
        correct: false,
      },
    ],
  },

  // Question 6
  {
    level: "Hard",
    question: "The constellation on the flag of Alaska is...",
    answers: [
      {
        id: "86",
        value: " Beagle Dogs",
        correct: false,
      },

      {
        id: "87",
        value: "flying fish",
        correct: false,
      },

      {
        id: "88",
        value: "Ursa Major",
        correct: true,
      },
    ],
  },

  // Question 7
  {
    level: "Hard",
    question: "Which area owes its name to the constellation Ursa Major?",
    answers: [
      {
        id: "89",
        value: "Arctic",
        correct: true,
      },

      {
        id: "90",
        value: "Africa",
        correct: false,
      },

      {
        id: "91",
        value: "Australia",
        correct: false,
      },
    ],
  },

  // Question 8
  {
    level: "Hard",
    question: "In what year was the first artificial earth satellite launched?",
    answers: [
      {
        id: "92",
        value: "September 9, 1958",
        correct: false,
      },

      {
        id: "93",
        value: "October 4, 1957",
        correct: true,
      },

      {
        id: "94",
        value: "November 6, 1955",
        correct: false,
      },
    ],
  },

  // Question 9
  {
    level: "Hard",
    question: "Which woman was the first to go into outer space?",
    answers: [
      {
        id: "95",
        value: "Elena Vladimirovna Kondakova",
        correct: false,
      },

      {
        id: "96",
        value: "Valentina Vladimirovna Tereshkova",
        correct: false,
      },

      {
        id: "97",
        value: " Svetlana Evgenievna Savitskaya",
        correct: true,
      },
    ],
  },

  // Question 10
  {
    level: "Hard",
    question: "How many meters was the first satellite?",
    answers: [
      {
        id: "98",
        value: "0,58 m",
        correct: true,
      },

      {
        id: "99",
        value: "4,42 m",
        correct: false,
      },

      {
        id: "100",
        value: "1 m",
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
        <div class="quiz-results-item ">
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
