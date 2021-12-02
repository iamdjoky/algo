"use strict";
const problemesFaciles = {
    "": ["bla", "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"],
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "o", "t"],
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"], //true
};
const problemeDifficile = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
    ] // false
};
const constructionPossible = (objectif, alphabet) => {
    if (objectif === "") {
        return true;
    }
    for (let element of alphabet) {
        if (objectif.indexOf(element) === 0) {
            const reste = objectif.slice(element.length);
            if (constructionPossible(reste, alphabet)) {
                return true;
            }
        }
    }
    return false;
};
function bench(problemes) {
    for (const objectif in problemes) {
        const alphabet = problemes[objectif];
        console.log(`"${objectif}" -> ${constructionPossible(objectif, alphabet)}`);
    }
}
console.log(bench(problemesFaciles));
//# sourceMappingURL=stringConstruction.js.map