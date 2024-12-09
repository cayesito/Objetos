function nameclass(){
    return{
        nombre:"",
        vida:"",
        defensa:"",
        ataque:"",
        magia:"",
        defensaMagica:""
    }
}

let clases =[]

let vagante = nameclass()
vagante.vida = 15
vagante.defensa = 11
vagante.ataque = 15
vagante.magia = 9
vagante.defensaMagica = 9
vagante.nombre = "vagante"
clases.push(vagante)

let guerrero = nameclass()
guerrero.vida = 11
guerrero.defensa = 11
guerrero.ataque = 10
guerrero.magia = 10
guerrero.defensaMagica = 8
guerrero.nombre = "guerrero"
clases.push(guerrero)

let heroe = nameclass()
heroe.vida = 14
heroe.defensa = 12
heroe.ataque = 16
heroe.magia = 7
heroe.defensaMagica = 8
heroe.nombre = "heroe"
clases.push(heroe)

let bandido = nameclass()
bandido.vida = 10
bandido.defensa = 10
bandido.ataque = 9
bandido.magia = 9 
bandido.defensaMagica = 8 
bandido.nombre = "bandido"
clases.push(bandido)

let astrologo = nameclass()
astrologo.vida = 9
astrologo.defensa = 9
astrologo.ataque = 8
astrologo.magia = 16
astrologo.defensaMagica = 7
astrologo.nombre = "astrologo"
clases.push(astrologo)

let profeta = nameclass()
profeta.vida = 10
profeta.defensa = 8
profeta.ataque = 11
profeta.magia = 7
profeta.defensaMagica = 16
profeta.nombre = "profeta"
clases.push(profeta)

let samurai = nameclass()
samurai.vida = 12
samurai.defensa = 13
samurai.ataque = 12
samurai.magia = 9
samurai.defensaMagica = 8
samurai.nombre = "samurai"
clases.push(samurai)

let prisionero = nameclass()
prisionero.vida = 11
prisionero.defensa = 11
prisionero.ataque = 11
prisionero.magia = 14
prisionero.defensaMagica = 6
prisionero.nombre = "prisionero"
clases.push(prisionero)

let confesor = nameclass()
confesor.vida = 10
confesor.defensa = 10
confesor.ataque = 12
confesor.magia = 9
confesor.defensaMagica = 14
confesor.nombre = "confesor"
clases.push(confesor)

let miserable = nameclass()
miserable.vida = 10
miserable.defensa = 10
miserable.ataque = 10 
miserable.magia =10
miserable.defensaMagica = 10
miserable.nombre = "miserable"
clases.push(miserable)

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


