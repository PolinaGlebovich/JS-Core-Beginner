function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Пример использования функции
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Отсортированный массив:", bubbleSort(numbers)); // Выведет отсортированный массив
