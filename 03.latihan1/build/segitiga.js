"use strict";
// import { stdin, stdout } from "process";
// import { createInterface } from "readline/promises";
// const rl = createInterface({
//     input: stdin,
//     output: stdout
// })
// const test = async () => {
//     const nama: string = await rl.question("masukan nama : ");
//     return nama;
// }
// console.log(test());
// const num: number = prompt("Masukan jumlah pola : ");
function segitiga(nilai) {
    let pola = "";
    for (let i = 1; i <= nilai; i++) {
        for (let j = 0; j < nilai - i; j++) {
            pola += "  ";
        }
        for (let k = 0; k < i; k++) {
            pola += " *";
        }
        pola += "\n";
    }
    console.log(pola);
}
segitiga(9);
