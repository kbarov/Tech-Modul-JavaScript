function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    arr
        .map(line => line.split(" "))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow())



}
cats(['Mellow 2', 'Tom 5']);