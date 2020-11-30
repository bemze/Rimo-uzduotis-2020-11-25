

function numComma (skaiciuArray) {
    if (!Array.isArray(skaiciuArray)) {
        console.error("Error: nera array");
        return false;
    }
    if (skaiciuArray.length === 0) {
        console.error('Error: sarasas tuscias');
        return false;
    }
    return parseFloat(skaiciuArray.toFixed(2));
}

export { numComma }