const questions = [
    {
        'id': 1,
        "question": 'What is JavaScript?',
        'Options': [
            'a.JavaScript is a scripting language used to make the website interactive',
            'b.JavaScript is an assembly language used to make the website interactive',
            'c.JavaScript is a compiled language used to make the website interactive',
            'd.None of these'
        ],
        'answer': 'a.JavaScript is a scripting language used to make the website interactive'
    },
    {
        'id': 2,
        "question": 'Which JavaScript method is used to access an HTML element by id?',
        'Options': [
            'a.getElementById()',
            'b.getElement(id)',
            'c.getElementById(id)',
            'd.elementById(id)'
        ],
        'answer': 'c.getElementById(id)'
    },
    {
        'id': 3,
        "question": 'Which of the following is correct about JavaScript?',
        'Options': [
            'a.JavaScript is an Object-Based',
            'b.JavaScript is Assembly-language',
            'c.JavaScript is an Object-Oriented',
            'd.JavaScript is a High-level language'
        ],
        'answer': 'a.JavaScript is an Object-Based'
    },
    {
        'id': 4,
        "question": 'JavaScript is the programming language of the _____.',
        'Options': [
            'a.Desktop',
            'b.Mobile',
            'c.Web',
            'd.None of the above'
        ],
        'answer': 'c.Web'
    },
    {
        'id': 5,
        "question": 'In which HTML element, we put the JavaScript code?',
        'Options': [
            'a.&lt;javascript&gt;',
            'b.&lt;js&gt;',
            'c.&lt;script&gt;',
            'd.&lt;css&gt;'
        ],
        'answer': 'c.&lt;script&gt;'
    },
    {
        'id': 6,
        "question": 'JavaScript code can be written in ____.',
        'Options': [
            'a.JavaScript file (.js file)',
            'b.HTML document directly',
            'c.JavaScript file and in HTML document directly',
            'd.In style sheets (.css file)'
        ],
        'answer': 'c.JavaScript file and in HTML document directly'
    }
]

const start_quiz = document.querySelector('#start_quiz');
const container = document.querySelector('.quiz_container');
const result_box = document.querySelector('.result_box');
const next = document.querySelector('#next');
const section_next = document.querySelector('.ques');
const replay = document.querySelector('#replay');
const options = document.querySelector('.options');
const buttons = document.querySelector('.buttons');

// start_quiz button event 
start_quiz.addEventListener('click', () => {
    start_quiz.style.display = 'none';
    container.style.display = 'block';
    show_question(0);
    buttons.classList.add('disabled');

})

// replay button event 
replay.addEventListener('click', () => {
    start_quiz.style.display = 'block';
    result_box.style.display = 'none';
    active = 0;
    userscore = 0;
    show_question(active);
    options.classList.remove('disabled');
})

// next button event 
let active = 0; // question index number
next.addEventListener('click', () => {
    if (active < questions.length - 1) {
        active++;
        show_question(active);
        options.classList.remove('disabled');
        buttons.classList.add('disabled')
    }
    else {
        result_box.style.display = 'block';
        container.style.display = 'none'
        result(); //result function 
    }
})

// show_question function 
let userscore = 0; // correct answer select by user
function show_question(index) {
    // question name 
    const quiz_question = document.querySelector('.quiz_question');
    quiz_question.innerHTML = `<h1><p>${questions[index].id}. </p>${questions[index].question}</h1>`
    //  question option list 
    options.innerHTML = `<div class="option_list">${questions[index].Options[0]}</div>
    <div class="option_list">${questions[index].Options[1]}</div>
    <div class="option_list">${questions[index].Options[2]}</div>
    <div class="option_list">${questions[index].Options[3]}</div>`
    // current number of question
    const question_no = document.querySelector('.question_no');
    question_no.innerHTML = `<span class="center"><p>${questions[index].id}</p>of<p>${questions.length}</p>Questions</span>`

    const options_list = document.querySelectorAll('.option_list');
    options_list.forEach((e) => {
        e.addEventListener('click', (op) => {
            if (op.target.innerHTML == questions[active].answer) {
                console.log(op.target.innerHTML);
                userscore++; //userscore incresed by correct answer
                e.classList.add('correct');
                options.classList.add('disabled');
                buttons.classList.remove('disabled');
            }

            else {
                e.classList.add('wrong');
                options.classList.add('disabled');
                buttons.classList.remove('disabled');
                // if wrong answer selected then correct class added correct answer 
                for (let i = 0; i < options.children.length; i++) {
                    if (options.children[i].innerHTML == questions[active].answer) {
                        options.children[i].classList.add('correct');
                    }
                }
            }
        })
    })
}

function result() {
    const score = document.querySelector('.score');
    score.innerHTML = `<h1>Your Score is</h1><span><p>${userscore}</p>of<p>${questions.length}</p></span>`
}