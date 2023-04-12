import {http_url, fetchData, postData} from './request.js';

class Question {
    constructor(questionId, questionSubject, year, questionTopic, questionDifficulty, questionText, questionAns, option1, option2, option3, option4, questionLearningObj) {
        this.questionId = questionId;
        this.questionSubject = questionSubject;
        this.year = year;
        this.questionTopic = questionTopic;
        this.questionDifficulty = questionDifficulty;
        this.questionText = questionText;
        this.questionAns = questionAns;
        this.option1 = option1
        this.option2 = option2
        this.option3 = option3
        this.option4 = option4
        this.questionLearningObj = questionLearningObj;
    }
}

const excel_file = document.getElementById('excel_file');
const submit = document.getElementById('create-question');
let sheet_data;

excel_file.addEventListener('change', (event) => {

    if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
    {
        document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';

        excel_file.value = '';

        return false;
    }

    var reader = new FileReader();

    reader.readAsArrayBuffer(event.target.files[0]);

    reader.onload = function (event) {
        var data = new Uint8Array(reader.result);
        var work_book = XLSX.read(data, {type:'array'});
        var sheet_name = work_book.SheetNames;
        sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], { header: 1 });

        if(sheet_data.length > 0)
        {
            var table_output = '<table class="table table-striped table-bordered">';
            for(var row = 0; row < sheet_data.length; row++)
            {
                table_output += '<tr>';
                for(var cell = 0; cell < sheet_data[row].length; cell++)
                {
                    if(row == 0)
                    {
                        table_output += '<th>'+sheet_data[row][cell]+'</th>';
                    }
                    else
                    {
                        table_output += '<td>'+sheet_data[row][cell]+'</td>';
                    }
                }
                table_output += '</tr>';
            }
            table_output += '</table>';
            document.getElementById('excel_data').innerHTML = table_output;
        }
        excel_file.value = '';
    }

     

});

const errorText = document.querySelector(".errormsg");
const successText = document.querySelector(".successmsg");

submit.addEventListener("click", async(e) => {
    e.preventDefault(); // prevent autosubmitting
    var subject = document.getElementById("subject").value;
    var year = document.getElementById("year").value;
    var questionList = parseExcelArray(sheet_data);
    if (subject == questionList[0]["questionSubject"])
    {
        const response1 = await postData(http_url + "delete_question_bank?subject=" + subject + "&year=" + year, "");
        console.log(response1);

        for (var i=0; i < questionList.length; i++) {
            const response2 = await postData(http_url + "add_question", questionList[i]);
            console.log(response2);
            if (response2 == "Question successfully added")
            {
                successText.style.display = 'block';
            }
            else
            {
                errorText.style.display = 'block';
            }
        }
    }
    else
    {
        console.log("Selected subject does not match question input!!")
    }
    
})

function parseExcelArray(sheet_data) {
    var questionList = [];
        for(var row = 1; row < sheet_data.length; row++)
        {
            if (sheet_data[row].length > 0) {
                var questionId = sheet_data[row][0];
                var questionSubject = sheet_data[row][1];
                var year = sheet_data[row][2]
                var questionTopic = sheet_data[row][3];
                var questionDifficulty = sheet_data[row][4];
                var questionText = sheet_data[row][5];
                var questionAns = sheet_data[row][6];
                var option1 = sheet_data[row][7]
                var option2 = sheet_data[row][8]
                var option3 = sheet_data[row][9]
                var option4 = sheet_data[row][10]
                var questionLearningObj = sheet_data[row][11];
                var question = new Question(questionId, questionSubject, year, questionTopic,
                    questionDifficulty, questionText, questionAns,
                    option1, option2, option3, option4, questionLearningObj);
                console.log(question); 
                questionList.push(question);   
            }
        }
    console.log("=====Question List======");
    console.log(questionList);
    return questionList;
}