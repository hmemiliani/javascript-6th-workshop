
//5.1: Definir la función: 
function manejarAsincronia(callback, promesa){
    promesa.then(() => {
        callback("promesa cumplida, callback ejecutado");
    }).catch(() => {// asi, si la promesa no se cumple entra al catch
        callback("¡Promesa rechazada!");
    });;
}

//5.2: Crear la Promesa: 
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve();
    }, 2000); //espera de 2 segundos
});


//5.3: Ejecutar el Callback:
function callback(mensaje){
    console.log(mensaje);
}

//5.4: Invocar la Función:
manejarAsincronia(callback, miPromesa);


//-¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
/*R./
Cambiar el tiempo del setTimeOut cambiara el tiempo en que se ejecute el callback, si cambias el tiempo a 5 segundos, el callback se ejecutará después de 5 segundos y asi mismo con 1 segundo.
*/

//¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
/*R./
Si la proimesa no se cumple, el callback no se ejecutara a menos que se maneje el rechazo en la función manejarAsincronia de alguna manera
*/

//¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
/*R./
Si, se puede modificar la funcion para que el callback maneje diferentes tipos de informacion dependiendo de que si la promesa se cumple o no, es decir se puede pasar informacion adicional en funcion de mostrar cosas diferentes en consola dependiendo si se cumple o no.
*/
