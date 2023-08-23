//Задание 1 Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const car = {
    brand: 'Changan',
    model: 'UNI-K',
    engine: '2.0',
    hp: 226

}

const ownCar = Object.create(car);

// для проверки
// ownCar.city = 'China';

function one(ownCar) {
    for (let key in ownCar) {
        if (ownCar.hasOwnProperty(key)) {
            console.log(key + ' = ' + ownCar[key]);
        }
    }
}
one(ownCar);


//Задание 2 Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

console.log(two('model', car));

function two(str, obj){
     if (obj.hasOwnProperty(str)) {
        return true;
    } else {
        return false;
    }
}

//Задание 3 Напишите функцию, которая создает пустой объект, но без прототипа.

function newObj() {
    return Object.create(null);
}
console.log(newObj());