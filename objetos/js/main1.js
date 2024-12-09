const todosNombres = ["andrew", "alex", "ilias", "raul", "cayetano", "adrian", "olek", "camila", "vicky", "manuela", "leo", "steven", "lucia", "yohan", "carles"]
const clasesDePersonaje = [{ health: 100, damage: 15 }, { health: 80, damage: 20 }, { health: 120, damage: 10 }, { health: 90, damage: 18 }, { health: 150, damage: 25 }];
const todosPersonajes = [];// aqui guardo todos personajes
let randomNumNombre = null;
let randomNumClase = null;
let cantidadMax = null;

if(todosNombres.length >= clasesDePersonaje.length){ // aqui encuentro la variable con menor cantidad de elementos
    cantidadMax = todosNombres.length
}else{
    cantidadMax = clasesDePersonaje.length
}

for(i=1; i<=cantidadMax; i++){
    if(todosNombres.length > 0 && clasesDePersonaje.length > 0){
        randomNumNombre = Math.floor(Math.random() * todosNombres.length);
        randomNumClase = Math.floor(Math.random() * clasesDePersonaje.length);

        const Personaje = {
            nombre: todosNombres[randomNumNombre],
            clase: clasesDePersonaje[randomNumClase]
        };

        todosPersonajes[`Personaje${i}${{}}`] = Personaje;

        todosNombres.splice(randomNumNombre, 1);
        clasesDePersonaje.splice(randomNumClase, 1);
    }
    else{break}
}

console.log(todosPersonajes);