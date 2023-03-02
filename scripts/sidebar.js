const botaoAbreSidebar = document.getElementById("open-sidebar")
const sidebar = document.getElementById("sidebar")

const abreSidebar = () => {
    if (sidebar.classList.contains("open")){
        sidebar.classList.remove("open")
    } else {
        sidebar.classList.add("open")
    }
}

botaoAbreSidebar.addEventListener('click', abreSidebar)