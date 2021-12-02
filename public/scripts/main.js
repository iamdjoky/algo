import { Grille } from "./Grille.js";
function init() {
    const mapCanvas = document.getElementById("map");
    const viewCanvas = document.getElementById("view");
    console.log(mapCanvas);
    console.log(viewCanvas);
    window.addEventListener("keyup", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log('up');
                break;
            case "ArrowDown":
                console.log('down');
                break;
            case "ArrowLeft":
                console.log('left');
                break;
            case "ArrowRight":
                console.log('right');
                break;
        }
        //evt.preventDefault()
    });
    window.addEventListener("keydown", (evt) => {
        switch (evt.key) {
            case "ArrowUp":
                console.log('up');
                break;
            case "ArrowDown":
                console.log('down');
                break;
            case "ArrowLeft":
                console.log('left');
                break;
            case "ArrowRight":
                console.log('right');
                break;
        }
        //evt.preventDefault()
    });
    const blockStyles = { 1: "rgba(238,68,0,1.0)" };
    const grille = new Grille({
        canvas: mapCanvas,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        blockStyles,
        couleurFond: "#EEE",
        couleurGrille: "#333",
        nbRayons: viewCanvas.width,
        angleRayons: Math.PI * .5,
        // vue: view3D
    });
    grille.dessine();
}
init();
//# sourceMappingURL=main.js.map