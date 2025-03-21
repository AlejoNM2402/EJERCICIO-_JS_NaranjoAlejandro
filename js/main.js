let expresion = prompt("Ingrese la expresion");

let equilibrioP = expresion.includes("(");
let equilibrioL = expresion.includes("[");
let equilibrioC = expresion.includes("{");
while (truw){
if (equilibrioP == true){
    let equilibrioPc = expresion.includes(")")
    if (equilibrioPc == true){
        console.log("Los parentesis de la expresion estan balanceados")
    }
    else{
        console.log("La expresion no esta balanceada")
        break
    }
}
else if(equilibrioL == true){
    let equilibrioCc = expresion.includes("]")
    if (equilibrioCc == true){
        console.log("Los corchetes de la expresion estan balanceados")
    }
    else{
        console.log("La expresion no esta balanceada")
        break
    }
}

else if(equilibrioL == true){
    let equilibrioLc = expresion.includes("]")
    if (equilibrioLc == true){
        console.log("Las llaves de la expresion estan balanceadas")
    }
    else{
        console.log("La expresion no esta balanceada")
        break
    }
}

if(equilibrioPc == true && equilibrioLc == true && equilibrioCc == true){
    console.log("La expresion esta completamente balanceada")
}
}