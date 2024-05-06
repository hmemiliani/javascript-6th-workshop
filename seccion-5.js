const url = "data.json";
let nombreCompleto;


function cargarYMostrarData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Habitaciones:", data.rooms);
                    console.log("Tipos de Habitaciones:", data.roomTypes);
                    resolve(data);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        }, 3000);
    });
}

function verificarDisponibilidad(habitaciones, fechaInicio, fechaFin, capacidadRequerida) {
    const habitacionesDisponibles = habitaciones.filter(habitacion => {
        const reservasEnFecha = habitacion.reservas.filter(reserva => {
            return (fechaInicio >= reserva.fechaInicio && fechaInicio <= reserva.fechaFin) ||
                (fechaFin >= reserva.fechaInicio && fechaFin <= reserva.fechaFin);
        });

        
        return reservasEnFecha.length === 0 && habitacion.capacidad >= capacidadRequerida;
    });

    return habitacionesDisponibles;
}



function consultarReservaPorNombre(reservas, nombre) {
    const reservasDelUsuario = reservas.filter(reserva => reserva.nombreCompleto.toLowerCase() === nombre.toLowerCase());
    
    if (reservasDelUsuario.length === 0) {
        alert("No se encontraron reservas para ese nombre.");
    } else {
        let reservasEncontradas = "";
        reservasDelUsuario.forEach(reserva => {
            reservasEncontradas += `ID: ${reserva.id}\n`;
            reservasEncontradas += `Nombre Completo: ${reserva.nombreCompleto}\n`;
            reservasEncontradas += `Fecha de Inicio: ${reserva.fechaInicio}\n`;
            reservasEncontradas += `Fecha de Fin: ${reserva.fechaFin}\n`;
            reservasEncontradas += `Tipo de Habitación: ${reserva.tipoHabitacion.name}\n`;
            reservasEncontradas += `Número de Habitación: ${reserva.habitacion.number}\n`;
            reservasEncontradas += "----------------------------------------\n";
        });
        alert(`Reservas encontradas para ${nombre}:\n${reservasEncontradas}`);

    }
}

function verificarDisponibilidad(habitaciones, fechaInicio, fechaFin, capacidadRequerida) {
    const habitacionesDisponibles = habitaciones.filter(habitacion => {
        const reservasEnFecha = habitacion.reservas.filter(reserva => {
            return (fechaInicio >= reserva.fechaInicio && fechaInicio <= reserva.fechaFin) ||
                (fechaFin >= reserva.fechaInicio && fechaFin <= reserva.fechaFin);
        });

        
        return reservasEnFecha.length === 0 && habitacion.capacidad >= capacidadRequerida;
    });

    return habitacionesDisponibles;
}


function manejarSeleccion(seleccion, habitaciones, roomTypes, reservas) {
    switch (seleccion) {
        case "1":
            nombreCompleto = prompt("Ingrese el nombre completo:");
            const fechas = prompt("Ingrese las fechas de inicio y fin separadas por coma (YYYY-MM-DD,YYYY-MM-DD):").split(",");
            const fechaInicio = new Date(fechas[0]);
            const fechaFin = new Date(fechas[1]);
            

            let tiposDeHabitaciones = "Tipos de Habitaciones Disponibles:\n";
            roomTypes.forEach((tipo, index) => {
                tiposDeHabitaciones += `${index + 1}. ${tipo.name} - ${tipo.description} - Capacidad: ${tipo.capacity} \n`;
            });
            const tipoSeleccionado = parseInt(prompt(`${tiposDeHabitaciones}\nSeleccione el tipo de habitación (número):`));
            const tipoHabitacion = roomTypes.find(tipo => tipo.id === tipoSeleccionado);
            
            if (!tipoHabitacion) {
                alert("Tipo de habitación no válido.");
                break;
            }
            
            const capacidadRequerida = tipoHabitacion.capacity;
            const habitacionesDisponibles = habitaciones.filter(habitacion => habitacion.roomTypeId === tipoSeleccionado && habitacion.availability);
            
            if (habitacionesDisponibles.length === 0) {
                alert("No hay habitaciones disponibles para el tipo seleccionado y la capacidad requerida.");
                break;
            }
            
            alert("Estas son las habitaciones disponibles para el tipo seleccionado:");
            let mostrarHabitaciones = "Habitaciones disponibles segun su seleccion\n";
            habitacionesDisponibles.forEach((habitacion, index) => {
                mostrarHabitaciones += `${index + 1}. Habitación ${habitacion.number} \n`;
            });
            
            const numeroHabitacion = parseInt(prompt(`${mostrarHabitaciones} \nSeleccione el número de habitación (número, ejemplo 101):`));
            const habitacionSeleccionada = habitacionesDisponibles.find(habitacion => habitacion.number === numeroHabitacion);
            
            if (!habitacionSeleccionada) {
                alert("Número de habitación no válido.");
                break;
            }
            
            const reserva = {
                id: reservas.length + 1,
                nombreCompleto: nombreCompleto,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                tipoHabitacion: tipoHabitacion,
                habitacion: habitacionSeleccionada
            };
            
            reservas.push(reserva);
            alert("Reserva creada exitosamente.");
            break;
        
        case "2":
            nombreCompleto = prompt("Ingrese el nombre completo:");
            consultarReservaPorNombre(reservas, nombreCompleto);
            break;
        case "3":
            if (reservas.length === 0) {
                alert("No hay reservas registradas actualmente.");
            } else {
                let todasLasReservas = "Reservas registradas:\n";
                reservas.forEach((reserva, index) => {
                    todasLasReservas += `Reserva ${index + 1}:\n`;
                    todasLasReservas += `ID: ${reserva.id}\n`;
                    todasLasReservas += `Nombre Completo: ${reserva.nombreCompleto}\n`;
                    todasLasReservas += `Fecha de Inicio: ${reserva.fechaInicio}\n`;
                    todasLasReservas += `Fecha de Fin: ${reserva.fechaFin}\n`;
                    todasLasReservas += `Tipo de Habitación: ${reserva.tipoHabitacion.name}\n`;
                    todasLasReservas += `Número de Habitación: ${reserva.habitacion.number}\n`;
                    todasLasReservas += "----------------------------------------\n\n";
                });
                alert(todasLasReservas);
            }
            break;
        case "4":
            if (reservas.length === 0) {
                console.log("No hay reservas registradas para eliminar.");
            } else {
                const numeroReserva = parseInt(prompt("Ingrese el número de reserva a eliminar:"));
                const reservaAEliminar = reservas.find(reserva => reserva.id === numeroReserva);
        
                if (!reservaAEliminar) {
                    console.log("No se encontró ninguna reserva con ese número.");
                } else {
                    const confirmacion = confirm(`¿Estás seguro que deseas eliminar la reserva ${numeroReserva}?`);
                    if (confirmacion) {
                        reservas = reservas.filter(reserva => reserva.id !== numeroReserva);
                        console.log(`Reserva ${numeroReserva} eliminada correctamente.`);
                    } else {
                        console.log("Operación de eliminación cancelada.");
                    }
                }
            }
            break;
            
        case "0":
            console.log("Saliendo del Sistema de Reservas de Hotel.");
            return;
        default:
            console.log("Selección no válida. Por favor, ingresa un número válido del menú.");
    }
}


function main() {
    cargarYMostrarData()
        .then(({ rooms, roomTypes }) => {
            console.log("Habitaciones:", rooms);
            console.log("Tipos de Habitaciones:", roomTypes);

            const reservas = [];

            let seleccion;
            do {
                seleccion = prompt("Bienvenido al Sistema de Reservas de Hotel\n\n1. Crear una reserva\n2. Consultar una reserva\n3. Mostrar todas las reservas\n4. Eliminar una reserva\n0. Salir\n\nPor favor, selecciona una opción del menú:");
                manejarSeleccion(seleccion, rooms, roomTypes, reservas);
            } while (seleccion !== "0");
        })
        .catch((error) => {
            console.error("Error al manejar la promesa:", error);
        });
}

main();
