console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);




//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
/*
R./
Javascript controla los tiempos de manera asincrona, pone las tareas con temporizadores a las web APIs del navegador, aunque el temporizador (setTimeout) sea cero(0) Javascript pone la tarea en la lista de tareas y las ejecuta despues de que las sincronas terminen su ejecucion. Por lo tanto el mensaje 2 solo se ejecuta cuando se completen los sincronos.
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//¿Qué nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
/*
R./
Cuando se ejecuta el codigo, lo primero que se ejecuta son las tareas sincronas, mientras que las tareas asincronas y las funciones de temporizador(setTimeout)se ponen en la cola de tareas y se ejecutan en orden despues de las sincronas esto es como javascript de manera eficiente maneja sus operaciones sin bloquear las ejecuciones.
*/