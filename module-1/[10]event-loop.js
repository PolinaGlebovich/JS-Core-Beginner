function callAfterDelay(callback) {
    setTimeout(callback, 2000);
}

// Пример использования
callAfterDelay(() => console.log("Функция вызвана после задержки в 2 секунды"));
