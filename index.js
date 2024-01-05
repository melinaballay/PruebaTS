var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.sonido = function () {
        return 'hace un sonido chistoso';
    };
    Animal.prototype.nuevoMetodo = function () {
        return 'esto es un nuevo metodo creado';
    };
    return Animal;
}());
var animal = new Animal('chufo y simon');
console.log("mi animal se llama ".concat(animal.nombre));
console.log("mi animal  ".concat(animal.sonido()));
console.log("mi animal tiene un ".concat(animal.nuevoMetodo()));
