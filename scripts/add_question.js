import {http_url, fetchData, postData} from './request.js';

const subjectInput = document.querySelector("#subject");
const topicInput = document.querySelector("#topic");
const learningObjInput = document.querySelector("#learning");
const questionTextInput = document.getElementsByName("question-text");

const choice1Text = document.getElementsByName("choice-1");
const choice2Text = document.getElementsByName("choice-2");
const choice3Text = document.getElementsByName("choice-3");
const choice4Text = document.getElementsByName("choice-4");
const questionAnsListInput = [choice1Text, choice2Text, choice3Text, choice4Text];

const questionAnsIdxInput = document.querySelector("#answer");
const createQnBtn = document.querySelector("#create-question");

const validateText = document.querySelector(".validate");

class Question {
    constructor(subject, topic, questionText, questionAnsIdx, questionAnsList, learningObj) {
        this.subject = subject;
        this.topic = topic;
        this.questionText = questionText;
        this.questionAnsIdx = questionAnsIdx;
        this.questionAnsList = questionAnsList;
        this.learningObj = learningObj;
    }
}

// click create qn
createQnBtn.addEventListener('click', () => {
    validateInputs();

    let newQuestion = new Question(subjectInput.value, topicInput.value, learningObjInput.value, 
                        questionTextInput.value, questionAnsIdxInput.value-1, questionAnsListInput, learningObjInput.value-1)
    // postData(http_url + "add_question")
})

function validateInputs() {
    if (subjectInput.value == null || topicInput.value == null || learningObjInput.value==null || 
        questionTextInput.value==null || questionAnsIdxInput.value==null || questionAnsListInput==null || learningObjInput.value==null){
            validateText.innerHTML = "Empty inputs found, please try again";
            validateText.style.display = 'block';
        }
    else {
        validateText.innerHTML = "";
        validateText.style.display = 'none';
    }
}