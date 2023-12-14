// let janji = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Berhasil");
//     } else {
//         reject(new Error("Gagal"));
//     }
// });
// janji
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);  
//     });

import { log } from "console";


const a = () => {
    console.log("tes");
}
setTimeout(() => {
    a();
}, 3000);