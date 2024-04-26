function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Ошибка: Введенное число не является целым числом");
    }
}

try {
    checkInteger(5.5);
} catch (error) {
    console.error(error.message);
}
