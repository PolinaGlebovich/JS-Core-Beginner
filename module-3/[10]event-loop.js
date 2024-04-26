function generateRandomNumberWithDelay() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(new Error("Сгенерировано число от 6 до 10"));
            }
        }, randomNumber * 1000);
    });
}

// Пример использования
generateRandomNumberWithDelay()
    .then(number => console.log("Сгенерировано число:", number))
    .catch(error => console.error(error));
