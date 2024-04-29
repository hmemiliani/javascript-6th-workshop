console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);


/*

¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
R./
Esto se debe a que JavaScript maneja los tiempos de manera asíncrona y delega la ejecución de tareas con temporizadores a las Web APIs del navegador. Aunque el retardo de setTimeout es de 0 segundos, JavaScript coloca esta tarea en la cola de tareas y la ejecuta después de que todas las tareas síncronas se completen. Por lo tanto, "Mensaje 2: Con timeout de 0 segundos" se muestra después de que JavaScript haya completado la ejecución del código síncrono.


¿Qué nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
R./
Este comportamiento ilustra cómo funciona el event loop de JavaScript y cómo maneja las tareas asíncronas. Cuando se ejecuta el código, las tareas síncronas se ejecutan de inmediato, mientras que las tareas asíncronas, como las funciones de temporizador de setTimeout, se colocan en la cola de tareas y se ejecutan después de que todas las tareas síncronas se completen. Esto muestra cómo JavaScript puede manejar operaciones asíncronas de manera eficiente sin bloquear la ejecución del código.


*/