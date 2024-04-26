function accessProperty(obj) {
    try {
        console.log(obj.property); // Попытка доступа к свойству неопределенного объекта
    } catch (error) {
        console.error("Произошла ошибка:", error.message);
    }
}

accessProperty(undefinedObject); // Вызов функции с неопределенным объектом
