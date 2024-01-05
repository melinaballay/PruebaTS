var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.sonido = function () {
        return 'hace un sonido chistoso';
    };
    return Animal;
}());
var animal = new Animal('chufo y simon');
console.log("mi animal se llama ".concat(animal.nombre));
console.log("mi animal  ".concat(animal.sonido()));
