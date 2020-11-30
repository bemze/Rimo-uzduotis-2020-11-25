import { arPrasmingasSarasas } from "./validacijos/validacijos.js";

function  sumavimas(skaiciuArray) {
    if (!arPrasmingasSarasas(skaiciuArray)) {
        return false;
    }
    
let suma = 0;
for (let i = 0; i < skaiciuArray.length; i++) {
    const skaicius = skaiciuArray[i];
    suma += skaicius;
    if (typeof skaicius !== "number") {
        console.warn("Warning: sarase esantys duomenys - ne skaiciai")
        continue;
    }
}

if (typeof suma !== 'number') {
    console.error("Error: nera skaicius")
    return false;
}

if (!isFinite(suma)) {
    console.error("Error: nera tikras skaicius");
    return false;
}
return suma;
}

export { sumavimas }