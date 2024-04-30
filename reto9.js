// Funcion para mostrar un mensaje aleatorio despues de un cierto intervalo de tiempo dado por el user
function timer(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomError = Math.random() < 0.5;
            if(randomError){
                reject(new Error("No tuviste suerte, este es el mensaje malo"))
            }else{
                resolve("Este mensaje se muestra despues del intervalo")
            }
        }, time);
    })
}
  
// Cargando datos desde la URL usando fetch
function cargarDatos(url){
    return fetch(url)
    .then(respuesta => {
        if (!respuesta.ok){
            throw new Error('Error al cargarlos datos');
        }
        return respuesta.json();
    });
}
  
// Solicitar segundos al usuario para la respuesta aleatoria
const segundos = parseInt(prompt("Bienvenido a la aleatoriedad, ingresa un tiempo en segundos para que se calcule una respues aleatoria\n\n\tIngresa los segundos segundos:"));
  
const milisegundos = segundos * 1000;
  
timer(milisegundos)
.then(mensaje =>{
    alert(mensaje);
    console.log(mensaje);
    return cargarDatos("https://jsonplaceholder.typicode.com/posts");
})
.then(data =>{
    alert("Datos cargados Exitosamente");
    console.log("Datos cargados Bien!");
    console.log(data);
})
.catch(error =>{
    console.error(`Pa... Error: ${error.message}`);
});
