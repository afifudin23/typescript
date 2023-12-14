// import { log } from "console";

let lirik_lagu = {
    "status": true,
    "data": {
        "artist": "Chrisye",
        "songTitle": "Kala Cinta Menggoda",
        "songLyrics": "Sejak jumpa kita pertama\nKulangsung jatuh cinta\nWalau kutahu kau ada pemiliknya\nTapi ku tak dapat membohongi hati nurani\nKu tak dapat menghindari gejolak cinta ini\nMaka ijinkanlah aku mencintaimu\nAtau bolehkah ku sekedar sayang padamu (2x)\nMemang serba salah rasanya\nTertusuk panah cinta\nApalagi juga ada pemiliknya\nTapi ku tak mampu membohongi hati nurani\nKu tak mampu menghindari gejolak cinta ini\nMaka maafkan jika ku mencintaimu\nAtau biarkan ku mengharap kau sayang padaku (2x)",
        "songLyricsArr": [
            "Sejak jumpa kita pertama",
            "Kulangsung jatuh cinta",
            "Walau kutahu kau ada pemiliknya",
            "Tapi ku tak dapat membohongi hati nurani",
            "Ku tak dapat menghindari gejolak cinta ini",
            "Maka ijinkanlah aku mencintaimu",
            "Atau bolehkah ku sekedar sayang padamu (2x)",
            "Memang serba salah rasanya",
            "Tertusuk panah cinta",
            "Apalagi juga ada pemiliknya",
            "Tapi ku tak mampu membohongi hati nurani",
            "Ku tak mampu menghindari gejolak cinta ini",
            "Maka maafkan jika ku mencintaimu",
            "Atau biarkan ku mengharap kau sayang padaku (2x)"
        ]
    }
}
const lirikTerbaru = {
    ...lirik_lagu.data, 
    "artist": "Afifudin",
    "songTitle": "Backend Developer Professional"
};
console.log(lirikTerbaru);

const ambilLirik2 = lirik_lagu.data.songLyricsArr["1"];
console.log(ambilLirik2);