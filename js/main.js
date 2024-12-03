const nombres = ["Ana", "Carlos", "Luis", "Maria", "Pedro", "Elena", "Juan", "Sofía", "Andrés", "Laura", "David", "Paula", "José", "Lucía", "Miguel"]
const animales = ["Perro", "Gato", "Elefante", "León", "Tigre", "Zebra", "Jirafa", "Cebra", "Caballo", "Vaca", "Oveja", "Cerdo", "Conejo", "Rata", "Hurón", "Loro", "Cotorra", "Pingüino", "Águila", "Búho", "Sapo", "Rana", "Serpiente", "Cobra", "Tortuga", "Cocodrilo", "Caimán", "Delfín", "Ballena", "Tiburón", "Medusa", "Estrella de mar", "Pulpo", "Calamar", "Langosta", "Cangrejo", "Leopardo", "Cheetah", "Pantera", "Lobo", "Hiena", "Zorro", "Búfalo", "Antílope", "Ciervo", "Rinoceronte", "Hipopótamo", "Koala", "Canguro", "Oso", "Panda", "Ardilla"]
const ciudades = ["de Madrid", "de Barcelona", "de Buenos Aires", "de Ciudad de México", "de Lima", "de Santiago", "de Bogotá", "de Caracas", "de Quito", "de Lima", "de Montevideo", "de La Paz", "de Asunción", "de San Salvador", "de Managua"];

let todosPersonajes = []

function createPersonaje(){
    const personaje = {
        nombre: null,
        animal: null,
        cuidad: null
    };

    
    personaje.nombre = nombres[Math.floor(Math.random() * nombres.length)];
    personaje.animal = animales[Math.floor(Math.random() * nombres.length)];
    personaje.cuidad = ciudades[Math.floor(Math.random() * nombres.length)];

    todosPersonajes.push(personaje)
}

for(i = nombres.length; i >= 0; i--){
    createPersonaje();
}



console.log(todosPersonajes);