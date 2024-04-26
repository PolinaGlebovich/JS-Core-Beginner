function firstNonRepeatingChar(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

// Пример использования функции
const text = "hello world";
console.log("Первый неповторяющийся символ:", firstNonRepeatingChar(text)); // Выведет первый неповторяющийся символ
