let clases =[]

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

const vagante = new CrearClass("vagante", 15, 11, 15, 9, 9);
const guerrero = new CrearClass("guerrero", 11, 11, 10, 10, 8);
const heroe = new CrearClass("heroe", 14, 12, 16, 7, 8);
const bandido = new CrearClass("bandido", 10, 10, 9, 9, 8);
const astrologo = new CrearClass("astrologo", 9, 9, 8, 16, 7);
const profeta = new CrearClass("profeta", 10, 8, 11, 7, 16);
const samurai = new CrearClass("samurai", 12, 13, 12, 9, 8);
const prisionero = new CrearClass("prisionero", 11, 11, 11, 14, 6);
const confesor = new CrearClass("confesor", 10, 10, 12, 9, 14);
const miserable = new CrearClass("miserable", 10, 10, 10, 10, 10);




let personajes = ["andrew", "alex", "ilias", "raul", "cayetano", "adrian", "olek", "camila", "vicky", "manuela", "leo", "steven", "lucia", "yohan", "carles"]

let character = {
    nombre: personajes[Math.floor(Math.random() * personajes.length)],
    class: clases[Math.floor(Math.random() * clases.length)]
}





let randomNumNombre = null;
let randomNumClase = null;
let cantidadMax = null;
const todosPersonajes = [];// aqui guardo todos personajes

if(personajes.length >= clases.length){ // aqui encuentro la variable con menor cantidad de elementos
    cantidadMax = personajes.length
}else{
    cantidadMax = clases.length
}

for(i=1; i<=cantidadMax; i++){
    if(personajes.length > 0 && clases.length > 0){
        randomNumNombre = Math.floor(Math.random() * personajes.length);
        randomNumClase = Math.floor(Math.random() * clases.length);

        const Personaje = {
            nombre: personajes[randomNumNombre],
            clase: clases[randomNumClase]
        };

        todosPersonajes[`Personaje${i}${{}}`] = Personaje;

        personajes.splice(randomNumNombre, 1);
        clases.splice(randomNumClase, 1);
    }
    else{break}
}



console.log(todosPersonajes);


