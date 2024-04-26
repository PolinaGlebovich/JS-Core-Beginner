function executeSequentialAsyncOperations(operations) {
    return operations.reduce((promiseChain, currentOperation) => {
        return promiseChain.then(chainResults =>
            currentOperation().then(currentResult =>
                [...chainResults, currentResult]
            )
        );
    }, Promise.resolve([]));
}

// Пример использования
executeSequentialAsyncOperations([
    () => new Promise(resolve => setTimeout(() => resolve("Операция 1 завершена"), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve("Операция 2 завершена"), 2000)),
    () => new Promise(resolve => setTimeout(() => resolve("Операция 3 завершена"), 1500))
]).then(results => console.log(results));
