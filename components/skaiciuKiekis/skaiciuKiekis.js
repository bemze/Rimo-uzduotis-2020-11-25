import { arPrasmingasSarasas } from "../../validacijos/validacijos.js";//paklausti Rimo kaip importe nurodyti absoliutu kelia o ne reliatyvu :D

function skaiciuKiekis(skaiciuArray) {
    // if (!Array.isArray(skaiciuArray)) {
    //     console.error("Error: nera array");
    //     return false;
    // }
    // if (skaiciuArray.length === 0) {
    //     console.error('Error: sarasas tuscias');
    //     return false;
    // }
    arPrasmingasSarasas(skaiciuArray);
    let kiekis = 0;

    for (let i = 0; i < skaiciuArray.length; i++) {
        const skaicius = skaiciuArray[i];
        if (typeof skaicius === 'number' && isFinite(skaicius) && skaicius !== NaN) {
            kiekis++;
        }
    }
    // console.log("skauciuKiekis yra "+kiekis);
    return kiekis;
}

export { skaiciuKiekis }