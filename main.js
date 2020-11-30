import { skaiciai } from "./data.js";
import { vidurkis } from "./vidurkis.js";
import { numComma } from "./apvalinimas.js";


const ats = (vidurkis(skaiciai))

console.log(`${numComma(ats)}`);
console.log(numComma(ats,0));


// function funkcijaKuriSakoLabas(){
//     console.log("labas");
// }

// funkcijaKuriSakoLabas();

// function funkcijaKuriGrazinaAte(){
//     return "labai ilgas sakinys";
// }

// funkcijaKuriGrazinaAte();
// const    taiKaGrazinoFunkcija = funkcijaKuriGrazinaAte();
// // const taiKaGrazinoFunkcija = "ate";

// // console.log(taiKaGrazinoFunkcija.split(" ").reverse().join(" "));

// function vaisiai(tekstas){
// switch(tekstas){
//     case "obuolys":
//         console.log("i funkcija paduotas zodis yra OBUOLYS");
//         // break;
//     case "melionas":
//         console.log("i funkcija paduotas zodis yra MELIONAS");
//         // break;
//     case "arbuzas":
//         console.log("i funkcija paduotas zodis yra ARBUZAS");
//         // break;
//     }

//     //cia kazka dar darau
// }

// vaisiai("melionas");

// function vaisiai2(tekstas){
//     switch(tekstas){
//         case "obuolys":
//             return "i funkcija paduotas zodis yra OBUOLYS";
//             // break;
//         case "melionas":
//             return "i funkcija paduotas zodis yra MELIONAS";
//             // break;
//         case "arbuzas":
//             return "i funkcija paduotas zodis yra ARBUZAS";
//             // break;
//         }
//         //po returno niekas nebebyks
//     }
//     console.log(vaisiai2("melionas"));