"use strict";
// Normal
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((datas) => {
    datas.map((data) => {
        console.log(data.name);
    });
});
// Object
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((datas) => {
//         datas.map(data => {
//         });
//     });
