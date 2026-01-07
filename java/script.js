
let heros=[["suraj","Yash","Sudar"],["sahil","Vijay","Anuj"]]
for(hero in heros){
    console.log("Heros in array "+heros[hero]);
    for(name in heros[hero]){
        console.log("Name: "+heros[hero][name]);
    }
}