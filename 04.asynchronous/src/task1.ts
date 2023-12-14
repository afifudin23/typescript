const cekHariKerja = (day: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dateDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cekDay = dateDay.find((item) => item === day);
            if (cekDay)
                resolve(cekDay);
            reject(new Error ("Hari ini libur !!"));
        }, 3000);
    });
};
// Then Catch
// cekHariKerja("senin")
//     .then(tes => console.log(tes));
// cekHariKerja("sabtu")
//     .then(tes => console.log(tes))
//     .catch(tes1 => console.log(tes1));
// Try Catch
// async function getData() {
//     try {
//         const result = await cekHariKerja("sabtu");
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// getData();
