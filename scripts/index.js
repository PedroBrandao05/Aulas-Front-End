const botaoAbreSidebar = document.getElementById("open-sidebar")
const sidebar = document.getElementById("sidebar")
const bandeiras = document.querySelectorAll("div.item")
const proximo = document.getElementById("proximo")
const anterior = document.getElementById("anterior")

const abreSidebar = () => {
    if (sidebar.classList.contains("open")){
        sidebar.classList.remove("open")
    } else {
        sidebar.classList.add("open")
    }
}

var bandeiraAtual = 0

function carrosel(n){
    if (n > bandeiras.length - 1) {
        bandeiraAtual = 0;
    } else if (n < 0) {
        bandeiraAtual = bandeiras.length - 1
    } else {
        bandeiraAtual = n
    }

    for (var i = 0; i < bandeiras.length; i++){
        bandeiras[i].style.display = 'none';
    }

    bandeiras[bandeiraAtual].style.display = 'flex';
}

proximo.addEventListener('click', () => { carrosel(bandeiraAtual + 1) })
anterior.addEventListener('click',() => { carrosel(bandeiraAtual - 1) })

carrosel(bandeiraAtual)

botaoAbreSidebar.addEventListener('click', abreSidebar)
