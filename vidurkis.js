import { sumavimas } from "./suma.js";
import { skaiciuKiekis } from "./components/skaiciuKiekis/skaiciuKiekis.js";


function vidurkis(skaiciuArray) {
    if (!Array.isArray(skaiciuArray)) {
        console.error("Error: nera array");
        return false;
    }
    if (skaiciuArray.length === 0) {
        console.error('Error: sarasas tuscias');
        return false;
    }
const suma = sumavimas(skaiciuArray);
const kiekis = skaiciuKiekis(skaiciuArray);
const vid = suma / kiekis;

    if (typeof vid !== 'number') {
        console.error("Error: nera skaicius");
        return false;
    }

    if (!isFinite(vid)) {
        console.error("Error: nera tikras skaicius");
        return false;
    }
return vid;

}


export { vidurkis }