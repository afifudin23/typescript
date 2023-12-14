// Normal
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((datas : any) => {
        datas.map((data : any) => {
            console.log(data.name);
        })
    })

// Object
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((datas) => {
//         datas.map(data => {

//         });
//     });