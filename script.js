const ul_1 = document.querySelector(".option1")
const ul_2 = document.querySelector(".option2")
const ul_3 = document.querySelector(".option3")
const ul_4 = document.querySelector(".option4")
const ul_5 = document.querySelector(".option5")
const ul_6 = document.querySelector(".option6")


const quizStart = document.querySelector(".quizStart")
const alder = document.querySelector(".alder")

const q1 = document.querySelector(".q1")
const a1 = document.querySelector(".a1")

const q2 = document.querySelector(".q2")
const a2 = document.querySelector(".a2")

const q3 = document.querySelector(".q3")
const a3 = document.querySelector(".a3")

const q4 = document.querySelector(".q4")
const a4 = document.querySelector(".a4")

const q5 = document.querySelector(".q5")
const a5 = document.querySelector(".a5")

const quiz = document.querySelector(".quiz")
const slut = document.querySelector(".slut")

// Start quizzen
function start() {
    quizStart.style.display = "none"
    alder.style.display = "block"
}

// Valg af alder 
ul_1.addEventListener("click", function() {
    alder.style.display = "none"
    q1.style.display = "block"
})

// Spørgsmål 1
ul_2.addEventListener("click", function() {
    q1.style.display = "none"
    a1.style.display = "block"
})

// knap under "rigtigt svar 1"
function spørgsmål2() {
    a1.style.display ="none"
    q2.style.display ="block"
}

//Spørgsmål 2
ul_3.addEventListener("click", function() {
    q2.style.display = "none"
    a2.style.display = "block"
})

//knap under "rigtigt svar 2"
function spørgsmål3() {
    a2.style.display ="none"
    q3.style.display ="block"
}

//Spørgsmål 3
ul_4.addEventListener("click", function() {
    q3.style.display ="none"
    a3.style.display ="block"
})

//knap under "rigtigt svar 3"
function spørgsmål4() {
    a3.style.display ="none"
    q4.style.display ="block"
}

//Spørgsmål 4
ul_5.addEventListener("click", function() {
    q4.style.display ="none"
    a4.style.display ="block"
})

//knap under "rigtigt svar 4"
function spørgsmål5() {
    a4.style.display ="none"
    q5.style.display ="block"
}

//Spørgsmål 5
ul_6.addEventListener("click", function() {
    q5.style.display ="none"
    a5.style.display ="block"
})

//knap under "rigtigt svar 5"
function tak() {
    a5.style.display ="none"
    slut.style.display ="block"
}

function afslut () {
    slut.style.display ="block"
    location. href = "https://www.datatilsynet.dk/"
}