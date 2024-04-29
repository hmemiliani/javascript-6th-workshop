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



let inicial = prompt("Digite el numero inicial:");

while (true){
    while (true){
        let acumulator = number(prompt("Cuanto quieres sumar del 1 al 10:"));
        if(acumulator < 11 || acumulator > 0){
            break;
        }else{
            alert("Digite un numero del 1 al 10");
        }
    }
    switch (acumulator){
        case 1:
            sumarUno(acumulator);
            break;
            case 2:
                sumarUno(acumulator);
                break;
            case 3:
                sumarUno(acumulator);
                break;
            case 4:
                sumarUno(acumulator);
                break;
            case 5:
                sumarUno(acumulator);
                break;
            case 6:
                sumarUno(acumulator);
                break;
            case 7:
                sumarUno(acumulator);
                break;
            case 8:
                sumarUno(acumulator);
                break;
            case 9:
                sumarUno(acumulator);
                break;
            case 10:
                sumarUno(acumulator);
                break;
                                                                                                                                                                                    
    }
}