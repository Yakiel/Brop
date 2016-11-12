export default class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
    
    saludo(){
        document.write('Hola, ' + this.nombre + '...')
        console.log('OK')
    }
}