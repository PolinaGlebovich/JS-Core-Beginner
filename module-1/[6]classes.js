class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country});
    }
}

const person1 = new Person("Иван", 30, "Россия");
const person2 = new Person("Мария", 25, "США");

person1.displayInfo(); // Выведет: Имя: Иван, Возраст: 30, Страна: Россия
person2.displayInfo(); // Выведет: Имя: Мария, Возраст: 25, Страна: США
