function sumFirstAndLastDigit(num) {
    const numStr = num.toString();
    const firstDigit = parseInt(numStr.charAt(0));
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1));
    const sum = firstDigit + lastDigit;
    console.log(Сумма первой и последней цифры числа ${num} равна ${sum});
}

// Пример использования функции
const number = 12345;
sumFirstAndLastDigit(number); // Выведет: Сумма первой и последней цифры числа 12345 равна 6
