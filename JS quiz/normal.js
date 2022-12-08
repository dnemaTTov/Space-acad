const DATA = [

    /////////////// NORMAL ///////////////
    // Question 1
    {
        level: 'Normal',
        question: 'Which scientist is called the father of astronautics?',
        answers: [
            {
                id: '41',
                value: 'G. Galileo ',
                correct: false,
            },

            {
                id: '42',
                value: 'I. Newton',
                correct: false,
            },

            {
                id: '43',
                value: 'K. E. Tsiolkovsky',
                correct: true,
            },
        ]
    },

    // Question 2
    {
        level: 'Normal',
        question: 'Which country was the first to send a man into space?',
        answers: [
            {
                id: '44',
                value: 'USA',
                correct: false,
            },

            {
                id: '45',
                value: 'USSR',
                correct: true,
            },

            {
                id: '46',
                value: 'China',
                correct: false,
            },
        ]
    },

    // Question 3
    {
        level: 'Normal',
        question: 'What does "cosmos" mean in Greek?',
        answers: [
            {
                id: '47',
                value: 'Earth',
                correct: false,
            },

            {
                id: '48',
                value: 'Universe',
                correct: true,
            },

            {
                id: '49',
                value: 'Road',
                correct: false,
            },
        ]
    },

    // Question 4
    {
        level: 'Normal',
        question: 'What is the name of the stone if it came to the planet from outer space?',
        answers: [
            {
                id: '50',
                value: 'Mineral',
                correct: false,
            },

            {
                id: '51',
                value: 'Cobblestone',
                correct: false,
            },

            {
                id: '52',
                value: 'Meteorite',
                correct: true,
            },
        ]
    },

    // Question 5
    {
        level: 'Normal',
        question: 'What is the name of the road along which the planet moves?',
        answers: [
            {
                id: '53',
                value: 'Orbit',
                correct: true,
            },

            {
                id: '54',
                value: 'Ring',
                correct: false,
            },

            {
                id: '55',
                value: ' Path',
                correct: false,
            },
        ]
    },

    // Question 6
    {
        level: 'Normal',
        question: 'What is the name of the force that keeps us on the surface of the Earth?',
        answers: [
            {
                id: '56',
                value: 'gravity',
                correct: true,
            },

            {
                id: '57',
                value: 'severity',
                correct: false,
            },

            {
                id: '58',
                value: 'Surface',
                correct: false,
            },
        ]
    },

    // Question 7
    {
        level: 'Normal',
        question: 'What was the name of the first satellite launched into space?',
        answers: [
            {
                id: '59',
                value: ' Voskhod-1',
                correct: false,
            },

            {
                id: '60',
                value: 'Vostok-1',
                correct: false,
            },

            {
                id: '61',
                value: 'Sputnik-1',
                correct: true,
            },
        ]
    },

    // Question 8
    {
        level: 'Normal',
        question: 'Does the sun revolve around the earth?',
        answers: [
            {
                id: '62',
                value: 'Yes',
                correct: false,
            },

            {
                id: '63',
                value: 'Not',
                correct: true,
            },

            {
                id: '64',
                value: 'Not proven',
                correct: false,
            },
        ]
    },

    // Question 9
    {
        level: 'Normal',
        question: 'What planet do we call red?',
        answers: [
            {
                id: '65',
                value: 'Mars',
                correct: true,
            },

            {
                id: '66',
                value: 'Jupiter',
                correct: false,
            },

            {
                id: '67',
                value: 'Mercury',
                correct: false,
            },
        ]
    },

    // Question 10
    {
        level: 'Normal',
        question: 'Which planet is known for its beautiful rings?',
        answers: [
            {
                id: '68',
                value: 'Uranium',
                correct: false,
            },

            {
                id: '69',
                value: 'Saturn',
                correct: true,
            },

            {
                id: '70',
                value: 'Neptune',
                correct: false,
            },
        ]
    },
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

// Questions
const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li class="hover-radio">
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                 </label>
            </li>
        `)
        .join('');

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
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'text-danger';
        } else if (answer.correct) {
            classname = 'text-success';
        }

        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
            <div class="quiz-results-item_question mb-2 fs-4 mt-5">${question.question}</div>

            <ul class="quiz-results-item_answers m-0 p-0 text-decoration-none">${getAnswers(index)}</ul>
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
quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        console.log('input')
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

        console.log(localResults);
    }
});

// Далее или с начала
quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');

            renderResults();
        } else {
            renderQuestions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);