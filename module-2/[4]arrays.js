function sumFirstHalfElements(arr) {
    const halfIndex = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, halfIndex);
    const sum = firstHalf.reduce((acc, curr) => acc + curr, 0);
    console.log("Сумма первой половины элементов массива:", sum);
}

// Пример использования функции
const numbers = [1, 2, 3, 4, 5];
sumFirstHalfElements(numbers); // Выведет: Сумма первой половины элементов массива: 6
