function sumOfSquares(arr) {
    const sum = arr.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
    console.log("Сумма квадратов элементов массива:", sum);
}

// Пример использования функции
const numbers = [1, 2, 3, 4, 5];
sumOfSquares(numbers); // Выведет: Сумма квадратов элементов массива: 55
