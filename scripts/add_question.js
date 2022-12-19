import {http_url, fetchData, postData} from './request.js';

const validateText = document.querySelector(".validate");
const form = document.getElementById("form");
class Question {
    constructor(questionId, questionSubject, questionTopic, questionText, questionAnsIndex, questionAnsText, questionLearningObj) {
        this.questionId = questionId;
        this.questionSubject = questionSubject;
        this.questionTopic = questionTopic;
        this.questionText = questionText;
        this.questionAnsIndex = questionAnsIndex;
        this.questionAnsText = questionAnsText;
        this.questionLearningObj = questionLearningObj;
    }
}

// click create qn
form.addEventListener('submit', async (e) => {
    event.preventDefault(); // prevent autosubmitting

    let message = '';

    var questionIdInput = document.querySelector("#question-id").value;
    var subjectInput = document.querySelector("#subject").value;
    var topicInput = document.querySelector("#topic").value;
    var learningObjInput = document.querySelector("#learning").value;

    var questionTextInput = document.getElementById("question-text").value;
    var choice1Text = document.getElementById("choice-1").value;
    var choice2Text = document.getElementById("choice-2").value;
    var choice3Text = document.getElementById("choice-3").value;
    var choice4Text = document.getElementById("choice-4").value;
    var questionAnsListInput = [choice1Text, choice2Text, choice3Text, choice4Text];
    var questionAnsIdxInput = document.querySelector("#answer").value;
    
    let newQuestion = new Question(questionIdInput, subjectInput, topicInput, 
                                questionTextInput, questionAnsIdxInput, questionAnsListInput, learningObjInput);
    const response = await postData(http_url + "add_question", newQuestion);

    validateText.innerHTML = response;
    validateText.style.display = 'block';
    if (response == "Question successfully added") {
        validateText.style.display = 'block';
        validateText.style.color = "#41f1b6";
    }
})



// const info = {
    
//     "questionId": 1,
//     "questionSubject": "English",
//     "questionTopic": 1,
//     "questionText": "Fill in the blank: Mary ____ a little lamb",
//     "questionAnsIndex": 1,
//     "questionAnsText": ["have", "has", "is", "was"],
//     "questionLearningObj": 3
    
// }
// postData(http_url + "add_question", info)