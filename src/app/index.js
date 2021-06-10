import Comentario from './clases/Comentario'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './css/style.css'
import "./sass/style.scss";

//const css = require('./css/style.css').toString();

let x = 3
const a = 10
    
const com = new Comentario()

console.log("Hola de node!!!!");
console.log(`La suma de ${x} + ${a} es ${x+a}`)

let mipedido = com.obtenerDomicilio()
    
mipedido
    .then(respuesta => console.log("Then",respuesta))
    .catch(respuesta => console.log("Catch",respuesta))
    .finally(() => console.log("Se finalizo la promesa"))

console.log(mipedido);

com.obtenerCategorias1()
