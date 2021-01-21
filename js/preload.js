let letreros = ['Limpiando Dust 2', 'Recolectando materiales', 'Preparando los subditos', 'Enfriando habilidades'];
let p = document.getElementById('letrero');
let index = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    await sleep(1000);
    letrero.innerText = letreros[index];
    index++;
    await sleep(1000);
    letrero.innerText = letreros[index];
    index++;
    await sleep(1000);
    letrero.innerText = letreros[index];
    index++;
    await sleep(1000);
    letrero.innerText = letreros[index];
    index++;
    await sleep(1000);
    window.location.href="../home.html"

}
