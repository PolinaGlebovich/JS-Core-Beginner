function increaseByTenPercent(arr) {
    const increasedArray = arr.map(num => num * 1.1);
    console.log("Массив после увеличения каждого числа на 10%:", increasedArray);
}

// Пример использования функции
const numbersArray = [10, 20, 30];
increaseByTenPercent(numbersArray); // Выведет: Массив после увеличения каждого числа на 10%: [11, 22, 33]
