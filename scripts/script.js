import {http_url, fetchData, postData} from './request.js';

const chart1 = document.querySelectorAll(".chart1");

class GameRecord{
  constructor(gameId, username, score, numberCorrect, questionSubject, questionTopic, weakestLearningObj, dateOfGame, completed, timeTaken) {
    this.gameId = gameId;
    this.username = username;
    this.score = score;
    this.numberCorrect = numberCorrect;
    this.questionSubject = questionSubject;
    this.questionTopic = questionTopic;
    this.weakestLearningObj = weakestLearningObj;
    this.dateOfGame = dateOfGame;
    this.completed = completed;
    this.timeTaken = timeTaken;
  }
}


const allGameRecords = await fetchData(http_url + "get_gamerecord");
let avg1 = 0;
let avg2 = 0;
let avg3 = 0;
getStatsAvgSubject();

function getStatsAvgSubject() {
  var sum1 = [];
  var sum2 = [];
  var sum3 = [];
  for (var i = 0; i < allGameRecords.length; i++){
    if (allGameRecords[i].questionTopic == 1) {
      sum1.push(allGameRecords[i].score)
    }
    else if (allGameRecords[i].questionTopic == 2) {
      sum2.push(allGameRecords[i].score)
    }
    else if (allGameRecords[i].questionTopic == 3) {
      sum3.push(allGameRecords[i].score)
    }
  }
  avg1 = getAvg(sum1);
  avg2 = getAvg(sum2);
  avg3 = getAvg(sum3);
}



function getAvg(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  const average = (sum / arr.length).toFixed(2);
  console.log(average);
  return average;
}

chart1.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Topic 1", "Topic 2", "Topic 3"],
      datasets: [
        {
          label: "average scores",
          data: [avg1, avg2, avg3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            // "rgba(75, 192, 192, 0.2)",
            // "rgba(153, 102, 255, 0.2)",
            // "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            // "rgba(75, 192, 192, 1)",
            // "rgba(153, 102, 255, 1)",
            // "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

const chart2 = document.querySelectorAll(".chart2");

chart2.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Learning obj 1", "Learning obj 2", "Learning obj 3"],
      datasets: [
        {
          label: "average scores",
          data: [1100, 700, 300, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            // "rgba(75, 192, 192, 0.2)",
            // "rgba(153, 102, 255, 0.2)",
            // "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            // "rgba(75, 192, 192, 1)",
            // "rgba(153, 102, 255, 1)",
            // "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});


const allQuestionBattleRecord = await postData(http_url + "get_question_battle_record");

var table = document.getElementById('table_example');
var table_output = ''
allQuestionBattleRecord.forEach(item => {
  // Create a new row and cell elements
  // const newRow = table_output.insertRow();
  table_output += '<tr>';
  table_output += '<td>' + item.username + '</td>';
  table_output += '<td>' + item.questionSubject + '</td>';
  table_output += '<td>' + item.questionId + '</td>';
  table_output += '<td>' + item.gameId + '</td>';
  table_output += '<td>' + item.correct + '</td>';
  table_output += '</tr>';
});

table.innerHTML = table_output;





// fetch(http_url + "get_question_battle_record")
//   .then(response => response.json())
//   .then(data => {
//     // Loop through the data and create table rows and cells
//     data.forEach(item => {
//       // Create a new row and cell elements
//       const newRow = table.insertRow();
//       const nameCell = newRow.insertCell();
//       const ageCell = newRow.insertCell();
//       const cityCell = newRow.insertCell();

//       // Set the cell contents
//       nameCell.innerText = item.name;
//       ageCell.innerText = item.age;
//       cityCell.innerText = item.city;
//     });
//   })
//   .catch(error => console.error(error));
