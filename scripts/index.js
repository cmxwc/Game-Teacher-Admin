import {http_url, fetchData, } from './request.js';

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggle")


// show sidebar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', ()  =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill in table
// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = `
//                         <td>${order.username}</td>
//                         <td>${order.classNo}</td>
//                         <td>${order.subject}</td>
//                         <td class=${order.score >= 80 ? 'success' : 'danger'}>${order.score}</td>
//                         <td class="primary">Details</td>
//                     `;
//     tr.innerHTML = trContent;
//     document.querySelector('table tbody').appendChild(tr)
// })

// fetch(http_url+"get_userData_all")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// fetchData(http_url+"get_userData_all");

// const spacegirl = await fetchData(http_url+"get_userData?username="+"spacegirl");
// console.log(spacegirl)
// console.log("hello why"+ spacegirl.classNumber);