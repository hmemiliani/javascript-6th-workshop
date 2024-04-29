console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());


//¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
/*
R./
cuando se llama a la funcionDeclarada() antes de su declaración, se obtiene el mensaje que esta tiene "Funcion declarada ha sido llamada" esto ocurre porque el hoisting de las funciones declaradas se ejecuta antes de la ejecución del código, por lo que la función se puede llamar antes de su declaración sin generar un error.

cuando se llama a la funcion funcionExpresada() antes de su declaración, da error diciendo que no esta definida, ya que las funciones expresadas solo tienen acceso a su definición completa después de su declaración, y no durante el hoisting.

luego, cuando se llama a las funciones después de su declaración, se obtiene el mensaje que tienen ambas sin errores.
*/

//¿Cómo difieren los resultados entre la función declarada y la función expresada?
/*
R./
La funcion declarada se llama y ejecuta sin problemas antes de su declaración, mientras que la funcion expresada solo se puede llamar después de su declaración.
*/


//¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
/* 
R./
JavaScript maneja las funciones declaradas y expresadas de manera diferente durante el hoisting. 

durante el hoisting las funciones declaradas se inicializan sin errores, mientras que las expresadas si muestran error si se llaman antes de ser declaradas.

*/