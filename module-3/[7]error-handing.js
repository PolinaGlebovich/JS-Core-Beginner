function checkDivision(num1, num2) {
    if (num2 === 0) {
        throw new Error("Ошибка: Второе число равно нулю");
    }
}

try {
    checkDivision(10, 0);
} catch (error) {
    console.error(error.message);
}
