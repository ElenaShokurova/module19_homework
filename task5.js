// Задание 5.

// Перепишите консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными.
// Соблюдайте best practices.
// Используйте синтаксис ES6.

class Tool {
    constructor(connect, name, location, power) {
        this.connect = connect
        this.property = {
            name: name,
            location: location,
            power: power
        }
    }

    toolPower() {
        if (this.connect === true) {
            console.log(`${this.property.name} подключен(a) к розетке. Мощность составляет ${this.property.power} Вт`)
        } else {
            console.log(`${this.property.name} не подключен к розетке`)
        }
    }

    toolEnergy() {
        return (this.connect === true) ? this.property.power : 0;
    }
}

const lamp = new Tool(true, 'Лампа', 'Ванна', 60);
const comp = new Tool(false, 'Компьютер', 'Кабинет', 150);
const tv = new Tool(true, 'Телевизор', 'Гостиная', 300);
const totalPower = lamp.toolEnergy() + comp.toolEnergy() + tv.toolEnergy();
lamp.toolPower()
comp.toolPower()
tv.toolPower()

console.log(`Общая мощность включенных приборов составляет: ${totalPower} Вт`)