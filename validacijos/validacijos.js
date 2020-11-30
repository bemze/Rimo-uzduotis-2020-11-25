function arPrasmingasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.error("Error: nera array");
        return false;
    }
    if (sarasas.length === 0) {
        console.error('Error: sarasas tuscias');
        return false;
    }
    return true;
}


export { arPrasmingasSarasas }