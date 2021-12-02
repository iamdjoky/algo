/*

//let toto : string = "tata";
const len : number = 10000000;
const toto : Array<number> | number [] //= [1,2,3,4,5] instentier un tableau
    = []
    
for ( let i= 0; i < len; i++) {
    toto.push(Math.round(Math.random() * 10 ))
} // instentier des nbr aleatoire sans virgule

const logiquedeTri = (a: number , b: number) => {
    //
    if (a>b) return 1
    if (a<b) return -1
    return 0 // trier les nbrs de façon croissante
    //
   return b - a
}

function bench() :number  {
    const debut : number = Date.now()
    const ret : Array<number>
        =toto.sort(logiquedeTri)
        return Date.now() - debut
} // calcule le temps que les fonctions prennent  par rapport à la date de maintenant


console.log(bench());

*/
import path from "path";
import express from "express";
const __dirname = path.resolve();
const srv = express();
srv.get("/", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
srv.get("/:file", (req, res) => res.sendFile(path.join(__dirname, "public", req.params["file"])));
srv.get("/scripts/:file", (req, res) => res.sendFile(path.join(__dirname, "public", "scripts", req.params["file"])));
const port = 3000;
srv.listen(port, () => console.log(`Serveur en écoute sur http://127.0.0.1:${port}`));
//# sourceMappingURL=index.js.map