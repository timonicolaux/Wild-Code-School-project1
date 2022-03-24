const quizData = [
    {
        question: "Quel est le nom du plat que vous voyez sur l'image ?",
        a: "Pâtes à la bolognaise",
        b: "La choucroute",
        c: "Gratin dauphinois",
        d: "Purée de tomate",
        correct: "c",
        image: "../img/gratin3.jpg"
    },
    {
        question: "Quel est le nom du chef que vous voyez sur l'image?",
        a: "Hélène Darroze",
        b: "Alain Passard",
        c: "Paul Bocuse",
        d: "Cyril Gignac",
        correct: "c",
        image: "../img/im4.jpg"
    },
    {
        question: "Quel est le nom de la ville que vous voyez sur l'image?",
        a: "Lyon",
        b: "Lugundum",
        c: "Saint-Etienne",
        d: "Biarritz",
        correct: "a",
        image: "../img/lyon.jpg"
    },
    {
        question: "Quel est le meilleur poject de la Wild?",
        a: "Snake",
        b: "Tokyo Express",
        c: "You&Me",
        d: "Les Cuistots",
        correct: "d",
        image: "../img/lescuistots.png"

    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const img = document.querySelector('.image')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    img.src = quizData[currentQuiz].image
    console.log(img)

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answerEl
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = 
            `
             <img src="../img/crazy-chef-happy-expression.jpg" alt="chef" class="image">
             <h2>Vous avez répondu ${score}/${quizData.length} questions correctement</h2>
             <button onclick="location.reload()">Recharger</button>
            `
            document.querySelector('.image').style.display = 'none';
        }
    }

})