function getLastCharacter(str) {
    if (str.length === 0) {
        console.log("Строка пуста");
    } else {
        const lastChar = str.charAt(str.length - 1);
        console.log(Последний символ строки "${str}" - ${lastChar});
    }
}

// Пример использования функции
const str = "javascript";
getLastCharacter(str); // Выведет: Последний символ строки "javascript" - t
