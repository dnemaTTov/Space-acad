const DATA = [
  /////////////// PRO ///////////////
  // Question 1
  {
    level: "Pro",
    question: "What is the largest moon of Neptune?",
    answers: [
      {
        id: "101",
        value: "Triton",
        correct: true,
      },

      {
        id: "102",
        value: "Buffalo",
        correct: false,
      },

      {
        id: "103",
        value: "Elephant",
        correct: false,
      },
    ],
  },

  // Question 2
  {
    level: "Pro",
    question: "How many minutes did Yuri Gagarin's flight take?",
    answers: [
      {
        id: "104",
        value: "108 min",
        correct: true,
      },

      {
        id: "105",
        value: "58 min",
        correct: false,
      },

      {
        id: "106",
        value: "78 min",
        correct: false,
      },
    ],
  },

  // Question 3
  {
    level: "Pro",
    question: "Distance from earth to sun",
    answers: [
      {
        id: "107",
        value: "100 million km",
        correct: false,
      },

      {
        id: "108",
        value: "150 million km",
        correct: true,
      },

      {
        id: "109",
        value: "200 billion km",
        correct: false,
      },
    ],
  },

  // Question 4
  {
    level: "Pro",
    question: "What are the clouds on Venus made of?",
    answers: [
      {
        id: "110",
        value: "Hydrogen",
        correct: false,
      },

      {
        id: "111",
        value: "Nitrogen",
        correct: false,
      },

      {
        id: "112",
        value: "Sulphuric acid",
        correct: true,
      },
    ],
  },

  // Question 5
  {
    level: "Pro",
    question: "How many moons does Saturn have?",
    answers: [
      {
        id: "113",
        value: "53",
        correct: true,
      },

      {
        id: "114",
        value: "50",
        correct: false,
      },

      {
        id: "115",
        value: "36",
        correct: false,
      },
    ],
  },

  // Question 6
  {
    level: "Pro",
    question: "How many solar systems are in our galaxy?",
    answers: [
      {
        id: "116",
        value: "10 billion",
        correct: false,
      },

      {
        id: "117",
        value: "45,5 billion",
        correct: false,
      },

      {
        id: "118",
        value: "100 billion",
        correct: true,
      },
    ],
  },

  // Question 7
  {
    level: "Pro",
    question: "How fast is the ISS moving?",
    answers: [
      {
        id: "119",
        value: "11.2 km/s",
        correct: false,
      },

      {
        id: "120",
        value: "7.9km/s",
        correct: true,
      },

      {
        id: "121",
        value: "46.9 km/s",
        correct: false,
      },
    ],
  },

  // Question 8
  {
    level: "Pro",
    question: "How many black holes are in our galaxy?",
    answers: [
      {
        id: "122",
        value: "10 million",
        correct: true,
      },

      {
        id: "123",
        value: "78 000",
        correct: false,
      },

      {
        id: "124",
        value: "5",
        correct: false,
      },
    ],
  },

  // Question 9
  {
    level: "Pro",
    question:
      "How long does it take to fly a plane to the nearest star outside the solar system?",
    answers: [
      {
        id: "125",
        value: "5  light years",
        correct: false,
      },

      {
        id: "126",
        value: "5 million years",
        correct: true,
      },

      {
        id: "127",
        value: "6 million years",
        correct: false,
      },
    ],
  },

  // Question 10
  {
    level: "Pro",
    question: "How long does it take for sunlight to reach Earth?",
    answers: [
      {
        id: "128",
        value: "24 hours",
        correct: false,
      },

      {
        id: "129",
        value: "56 min 34 sec",
        correct: false,
      },

      {
        id: "130",
        value: "8 min 17 sec",
        correct: true,
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
            <h1 class="${DATA[index].level} shadow_1">${DATA[index].level}</h1>

            <div class="quiz-questions-item_question mb-3 fs-5 mx-2 text-info">
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
            <div class="quiz-results-item_question mb-2 fs-4 mt-5">${
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
