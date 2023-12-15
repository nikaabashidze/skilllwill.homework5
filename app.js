


const condition=document.getElementById('condition')
const functions=document.getElementById('functions')
const window1=document.getElementById('window1')
const window2=document.getElementById('window2')
const window3=document.getElementById('window3')
const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');




//////// HOMEEWORK 1

                                                             
const divEl = document.createElement('div')
const buttonEl = document.createElement('button')

const textEl2 = document.createTextNode('Front-end development')
const textEl1 = document.createTextNode('Hide/Show')

buttonEl.setAttribute('id', 'btn', )
divEl.setAttribute('id', "divId")

buttonEl.append(textEl1)
divEl.append(textEl2)
window1.append(divEl,buttonEl)






btn.addEventListener("click", () => {
    
    if (divEl.style.display === 'none') {
        divEl.style.display = 'block';
    } else {
        divEl.style.display = 'none';
    }
});









homework1.addEventListener('click', function() {
    
    
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})


  
    condition.style.display = 'block';
    functions.style.display = 'block';
    window1.style.display = 'block';
    window2.style.display = 'none';
    window3.style.display = 'none';

    
    function1.style.display = 'block';
    function2.style.display = 'none';
    function3.style.display = 'none';
    
    condition1.style.display = 'block';
    condition2.style.display = 'none';
    condition3.style.display = 'none';
    
  
    
});    





// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');



// //HOMEEWORK 2







const divcardEl = document.createElement('div')
const h2El = document.createElement('h2')
const ahrefEl = document.createElement('a')

const textEl3 =document.createTextNode ('Gandalf')
const textEl4 = document.createTextNode('Go to profile')


ahrefEl.setAttribute('href',"#")
divcardEl.setAttribute('id', "lotr")


h2El.append (textEl3)
ahrefEl.append(textEl4)
divcardEl.append(h2El,ahrefEl)

window2.append(divcardEl)





homework2.addEventListener('click', function() {   
    
    gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})


 
    condition.style.display = 'block';
    functions.style.display = 'block';
    window2.style.display = 'block';
    window1.style.display = 'none';
    window3.style.display = 'none';


    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
    condition1.style.display = 'none';
    condition2.style.display = 'block';
    condition3.style.display = 'none';
    
    

});



// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

//                                                    



const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');
const container = document.getElementById('container')
const cont = document.getElementById('cont')


const back = document.getElementById('back')
const start = document.getElementById('start')
const formcontainer = document.getElementById('formcontainer')
const question = document.getElementById ('question')
const questionNumber = document.getElementById('questionNumber')
const questionAnswer = document.getElementById ('questionAnswer')



             //HOMEEWORK 3


homework3.addEventListener('click', function() {



    back.style.display = 'block';
   
    homework1.style.display = 'none';
    homework2.style.display = 'none';
    homework3.style.display = 'none';



    container.style.height = '5%';
    container.style.width = '100%';
    cont.style.height = '100%';
    cont.style.width = '100%';
    back.style.marginTop = '0';
    window3.style.height = '85%'
    back.firstElementChild.style.width = '10%';



    condition.style.display = 'none';
    functions.style.display = 'none';


    window1.style.display = 'none';
    window2.style.display = 'none';
    window3.style.display = 'block';

});

//////////////////////////////////////////////////


const questions = [
    {
        questionnumber: 'Question 1',
        text: 'What is HTML?',
        answers: [
            'Cascading Style Sheets',
            'HyperText Markup Language',
            'Programming Language',
            'Website'
        ],
        correctAnswer: 1
    },
    {
        questionnumber: 'Question 1',
        text: 'What is HTML?',
        answers: [
            'Cascading Style Sheets',
            'HyperText Markup Language',
            'Programming Language',
            'Website'
        ],
        correctAnswer: 1
    },
    {
        questionnumber: 'Question 2',
        text: 'What is CSS?',
        answers: [
            'HyperText Markup Language',
            'Programming Language',
            'Website',
            'Cascading Style Sheets',
        ],
        correctAnswer: 3
    },
    {
        questionnumber: 'Question 3',
        text: 'What is JavaScript?',
        answers: [
            'HyperText Markup Language',
            'Cascading Style Sheets',
            'Programming Language',
            'Website'
        ],
        correctAnswer: 2
    },
    {
        questionnumber: 'Question 4',
        text: 'What is DOM?',
        answers: [
            'Programming Language',
            'HyperText Markup Language',
            'Cascading Style Sheets',
            'Document Object Model',
        ],
        correctAnswer: 3
    },
    {
        questionnumber: 'Question 5',
        text: 'What is Github?',
        answers: [
            'Hosting service for software projects using Git',
            'HyperText Markup Language',
            'Cascading Style Sheets',
            'Website'
        ],
        correctAnswer: 0
    },
];



const allanswersbtn = document.getElementById ('allanswersbtn') 
const answerbtn1 = document.getElementById('answer1')
const answerbtn2 = document.getElementById('answer2')
const answerbtn3 = document.getElementById('answer3')
const answerbtn4 = document.getElementById('answer4')






const answerButtons = [answerbtn1, answerbtn2, answerbtn3, answerbtn4];
let currentQuestionIndex = 0;




start.addEventListener('click',  function () {

    const nicknameInput = document.getElementById('nickname');
    const resultName = document.getElementById('resultname');

    const nicknameValue = nicknameInput.value;

    resultName.textContent = nicknameValue;



    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        startQuiz();
    }
});


function startQuiz() {
    formcontainer.style.display = 'none';
    questionNumber.style.display = 'block';

    setTimeout(function () {
        questionNumber.style.display = 'none';
        questionAnswer.style.display = 'grid';
    }, 2000);

    displayQuestion();
    getSelectedAnswer();
}



function checkAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];


    if (currentQuestion) {
        const selectedButton = answerButtons[index];

        if (index === currentQuestion.correctAnswer) {
            selectedButton.style.backgroundColor = 'green';
        } else {
            selectedButton.style.backgroundColor = 'red';
        }}
}





function displayQuestion() {

    resetAnswerButtonStyles();
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
        questionNumber.textContent = currentQuestion.questionnumber;
        question.textContent = currentQuestion.text;

        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = currentQuestion.answers[i];
        }
    } else {
        questionAnswer.style.display = 'none';
        result.style.display = 'block'
    }
}

function resetAnswerButtonStyles() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].style.backgroundColor = ''; 
    }
}








function handleAnswerButtonClick(index) {
    return function () {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedButton = answerButtons[index];

        if (!currentQuestion.answerSelected) {
            currentQuestion.answerSelected = true;

            if (index === currentQuestion.correctAnswer) {
                selectedButton.style.backgroundColor = 'green';
                score.innerText = (parseInt(score.innerText) + 1) + '/5';

            } 
            else {
                selectedButton.style.backgroundColor = 'red';
            }

            disableAnswerButtons();
        }
    };
}


function disableAnswerButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener('click', handleAnswerButtonClick(i));
    }
}

function enableAnswerButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', handleAnswerButtonClick(i));
    }
}







function getSelectedAnswer() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', handleAnswerButtonClick(i));
    }
}







const result = document.getElementById('result')
const resultname = document.getElementById ('resultname')
const score = document.getElementById('score')



nextbutton.addEventListener('click', function () {
    questionAnswer.style.display = 'none';
    questionNumber.style.display = 'block';

    setTimeout(function () {
        questionNumber.style.display = 'none';
        questionAnswer.style.display = 'grid';
    }, 2000);
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } 
    else {
        questionNumber.style.display = 'none';
        nextbutton.style.display = 'none';
        question.style.display = 'none';
        allanswersbtn.style.display = 'none';
        result.style.display = 'block';
    }
});






    
   




    
   

























// ///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////


















