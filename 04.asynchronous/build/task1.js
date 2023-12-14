"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dateDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cekDay = dateDay.find((item) => item === day);
            if (cekDay)
                resolve(cekDay);
            reject("Hari ini libur !!");
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
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield cekHariKerja("sabtu");
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    });
}
getData();
