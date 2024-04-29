console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

//--------------------------------------------------------------------------


//solicito el orden al usuario
alert("Identifique en que orden se ejecutaran los console.log del siguiente codigo \n\nADVERTENCIA: Lea con cuidado");


const choise = prompt("console.log('Inicio del script');\n\nsetTimeout(() => {\n  console.log('Primer setTimeout');\n}, 0);\n\nsetTimeout(() => {\n  console.log('Segundo setTimeout');\n}, 0);\n\nPromise.resolve('Promesa resuelta').then(console.log);\n\nconsole.log('Fin del script');\n\nEscribe el orden de la ejecucion en el formato '12345' o '23154'\n\n\t1. Inicio del script\n\t2. Primer setTimeout\n\t3. Segundo setTimeout\n\t4. Promesa resuelta\n\t5.  Fin del script");


//separo el orden y lo meto en un arreglo ademas de que creo la erespuesta correcta
const ordenUsuario = choise.split("").map(item => item.trim());
const ordenCorrecto = ["1","5","4","2","3"]; //respuesta correcta


//verifico que todo este en orden
let error = 0;
for (let i = 0; i < ordenCorrecto.length; i++) {
    if(ordenUsuario[i] !== ordenCorrecto[i]){
        error++;
    }
    
}


//Calificacion y feedback
if (error === 0) {
    console.log("RESPUESTA CORRECTA!!! Felicitaciones!!!!!! ");
  } else if (error === 2) {
    console.log("Respuesta errada, te equivocaste al menos en dos pasos.... bueno ya, Aqui esta donde erraste:");
    for (let i = 0; i < ordenCorrecto.length; i++) {
      if (ordenUsuario[i] !== ordenCorrecto[i]) {
        console.log(`Deberia ser: ${ordenCorrecto[i]}`);
        
      }else{
        console.log(`Correcto en la posicion ${i+1} es : ${ordenCorrecto[i]}`);
        
      }
    }
  } else {
    console.log("Respuesta errada, ERRADA!! EQUIVOCADA!!! MALAAAAA....TE EQUIVOCASTE MAS DE UNA VEZ!!! bueno ya, Aqui esta donde erraste:");
    for (let i = 0; i < ordenCorrecto.length; i++) {
      if (ordenUsuario[i] !== ordenCorrecto[i]) {
        console.log(`En lugar de "${ordenUsuario[i]}" deberia ser: "${ordenCorrecto[i]}"`);
      }else{
        console.log(`Correcto en la posicion ${i+1} es : ${ordenCorrecto[i]}`);
        
      }
    }
  }
