export class Grille {
    //private _vue: IView3D
    constructor(config) {
        this._canvas = config.canvas;
        this._ctx = this._canvas.getContext('2d');
        this._data = config.data;
        this._nbColonnes = this._data[0].length;
        this._nbLignes = this._data.length;
        this.blockStyles = config.blockStyles;
        this.couleurFond = config.couleurFond;
        this.couleurGrille = config.couleurGrille;
        this._blockHeight = this._canvas.height / this._nbLignes;
        this._blockWidth = this._canvas.width / this._nbColonnes;
        //this.rayons = []
        //this.intersections = []
        this.angleRayons = config.angleRayons;
        //this._vue = config.vue
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
        this._nbColonnes = this._data[0].length;
        this._nbLignes = this._data.length;
        this._blockHeight = this._canvas.height / this._nbLignes;
        this._blockWidth = this._canvas.width / this._nbColonnes;
    }
    dessineGrille() {
        const ctx = this.config.canvas.getContext('2d');
        ctx.fillStyle = this.couleurFond;
        ctx.fillRect(0, 0, this.config.canvas.width, this.config.canvas.height);
        ctx.fillStyle = this.couleurGrille;
        for (let i = 0; i < this.nbColonnes; i++) {
            ctx.fillRect(i * this.blockWidth, 0, this.blockWidth, this.config.canvas.height);
        }
        for (let i = 0; i < this.nbLignes; i++) {
            ctx.fillRect(0, i * this.blockHeight, this.config.canvas.width, this.blockHeight);
        }
    }
}
//# sourceMappingURL=Grille2.js.map