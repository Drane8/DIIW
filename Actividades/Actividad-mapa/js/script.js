var grande = false;
var cambiarMap = function () {
    if (window.innerWidth > 999 && !grande) {
        document.getElementById("mapa").setAttribute("usemap", "#map");
        grande = true;
    }
    if (window.innerWidth <= 999 && grande) {
        document.getElementById("mapa").setAttribute("usemap", "#map_movil");
        grande = false;
    }
};

window.addEventListener("resize", cambiarMap);
window.addEventListener("onload", cambiarMap);