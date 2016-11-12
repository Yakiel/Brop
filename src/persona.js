export default class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
    
    saludo(){
        document.write('Hello, ' + this.nombre + ' welcome to Brop!')
        console.log('OK')
    }
}