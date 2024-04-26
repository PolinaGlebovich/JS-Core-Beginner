function compareObjects(obj1, obj2) {
    // Проверяем количество свойств в обоих объектах
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    // Перебираем свойства первого объекта
    for (let key in obj1) {
        // Проверяем, есть ли такое же свойство во втором объекте
        if (!(key in obj2)) {
            return false;
        }

        // Сравниваем значения свойств
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // Если все свойства совпадают, возвращаем true
    return true;
}

// Пример использования функции
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(compareObjects(obj1, obj2)); // true
console.log(compareObjects(obj1, obj3)); // false
