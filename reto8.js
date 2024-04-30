function sumador(num){
    return function acumulador(num2){
        return num + num2;
    }
}

const sumarUno = sumador(1);
const sumarDos = sumador(2);
const sumarTres = sumador(3);
const sumarCuatro = sumador(4);
const sumarCinco = sumador(5);
const sumarSeis = sumador(6);
const sumarSiete = sumador(7);
const sumarOcho = sumador(8);
const sumarNueve = sumador(9);
const sumarDiez = sumador(10);


let sum = 0;
let inicial = prompt("Digite el numero inicial:");
let acumulator;
while (true){
    while (true){
        acumulator = parseInt(prompt("Cuanto quieres sumar del 0 al 10:"));
        if(acumulator < 11 || acumulator > 0){
            break;
        }else{
            alert("Digite un numero del 0 al 10");
        }
    }
    switch (acumulator){
        case 0:
            break;
        case 1:
            sum += sumarUno(acumulator);
            break;
        case 2:
            sum += sumarDos(acumulator);
            break;
        case 3:
            sum += sumarTres(acumulator);
            break;
        case 4:
            sum += sumarCuatro(acumulator);
            break;
        case 5:
            sum += sumarCinco(acumulator);
            break;
        case 6:
            sum += sumarSeis(acumulator);
            break;
        case 7:
            sum += sumarSiete(acumulator);
            break;
        case 8:
            sum += sumarOcho(acumulator);
            break;
        case 9:
            sum += sumarNueve(acumulator);
            break;
        case 10:
            sum += sumarDiez(acumulator);
            break;
        default:
            alert("Recuerde que solo es del 0 al 10, intenta denuevo..");
                                                                                                                                                                                    
    }
    let exit = confirm("quieres sumar otro numero?")
    if(!exit){
        console.log(sum);
        break;
    }
}