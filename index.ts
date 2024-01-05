class Animal{
    constructor(public nombre: string){}

sonido(){
    return 'hace un sonido chistoso';
}

nuevoMetodo(){
return 'esto es un nuevo metodo creado'
}
}
const animal = new Animal('chufo y simon');
console.log(`mi animal se llama ${animal.nombre}`);
console.log(`mi animal  ${animal.sonido()}`);
console.log(`mi animal tiene un ${animal.nuevoMetodo()}`);