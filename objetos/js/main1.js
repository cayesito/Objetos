let clases =[] // los clases para personaje

class CrearClass{
    constructor(nombre, vida, defensa, ataque, magia, defensaMagica){
        this.nombre = nombre;
        this.vida = vida;
        this.defensa = defensa;
        this.ataque = ataque;
        this.magia = magia;
        this.defensaMagica = defensaMagica;
        clases.push(this);
    }
}

const vagante = new CrearClass("Vagante", 15, 11, 15, 9, 9);
const guerrero = new CrearClass("Guerrero", 11, 11, 10, 10, 8);
const heroe = new CrearClass("Heroe", 14, 12, 16, 7, 8);
const bandido = new CrearClass("Bandido", 10, 10, 9, 9, 8);
const astrologo = new CrearClass("Astrologo", 9, 9, 8, 16, 7);
const profeta = new CrearClass("Profeta", 10, 8, 11, 7, 16);
const samurai = new CrearClass("Samurai", 12, 13, 12, 9, 8);
const prisionero = new CrearClass("Prisionero", 11, 11, 11, 14, 6);
const confesor = new CrearClass("Confesor", 10, 10, 12, 9, 14);
const miserable = new CrearClass("Miserable", 10, 10, 10, 10, 10);
const caballero = new CrearClass("Caballero", 13, 14, 12, 8, 12);
const explorador = new CrearClass("Explorador", 12, 11, 10, 9, 11);
const nigromante = new CrearClass("Nigromante", 9, 8, 10, 16, 14);
const arquero = new CrearClass("Arquero", 11, 10, 13, 8, 9);
const monje = new CrearClass("Monje", 10, 9, 9, 14, 13);
const asesino = new CrearClass("Asesino", 12, 9, 14, 9, 10);
const druida = new CrearClass("Druida", 9, 8, 9, 17, 15);
const berserker = new CrearClass("Berserker", 16, 12, 18, 5, 7);
const paladin = new CrearClass("Paladín", 14, 15, 13, 8, 13);
const sombra = new CrearClass("Sombra", 10, 9, 15, 11, 9);






let personajes = ["Andrew", "Alex", "Ilias", "Raul", "Cayetano", "Adrian", "Oleksandr", "Camila", "Vicky", "Manuela", "Leo", "Steven", "Lucia", "Yohan", "Carles"]
let randomNum = null;
const todosPersonajes = [];// aqui guardo todos personajes
const personajesLength = personajes.length;
const clasesLength = clases.length;


for(i=1; i<=personajesLength && i<=clasesLength; i++){
    const Personaje = {};

    randomNum = Math.floor(Math.random() * personajes.length);
    Personaje.nombre = personajes[randomNum];
    personajes.splice(randomNum, 1);

    randomNum = Math.floor(Math.random() * clases.length);
    Personaje.clase = clases[randomNum];
    clases.splice(randomNum, 1);

    todosPersonajes[`Personaje${i}${{}}`] = Personaje;
}

console.log(todosPersonajes);