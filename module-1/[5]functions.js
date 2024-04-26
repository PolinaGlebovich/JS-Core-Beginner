function repeatOperation(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count === repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}

// Пример использования функции
function printHello() {
    console.log("Hello!");
}

repeatOperation(printHello, 1000, 5); // Выведет "Hello!" каждую секунду 5 раз
