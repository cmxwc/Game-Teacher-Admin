import {http_url, fetchData, postData} from './request.js';


const allQuestions = await fetchData(http_url+"get_question_all");
 // <td class=${element.questionLearningObj >= 80 ? 'success' : 'danger'}>${element.questionId}</td>
allQuestions.forEach(element => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${element.questionSubject}</td>
                        <td>${element.questionId}</td>
                        <td>${element.questionTopic}</td>
                        <td>${element.questionLearningObj}</td>
                        <td>${element.questionText}</td>
                       
                        <td class="primary">Details</td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
});