import { http_url, getData, fetchData, postData } from './request.js';

// const login = document.getElementById("login")
const submit = document.getElementById("submit")
const validateText = document.querySelector(".errormsg");

class TeacherLogin{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

submit.addEventListener("click", async(e) => {
    e.preventDefault(); // prevent autosubmitting
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("The username is " + username + " the password is " + password)
    let teacherLogin = new TeacherLogin(username, password)
    const response1 = await fetchData(http_url + "get_teachers", teacherLogin);
    const response = await getData(http_url + "login_teacher", teacherLogin);
    console.log(response)
}) 
