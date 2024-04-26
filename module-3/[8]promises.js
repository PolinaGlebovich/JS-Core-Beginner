function fetchDataFromMultipleAPIs(apiUrls) {
    return Promise.all(apiUrls.map(apiUrl =>
        fetch(apiUrl).then(response => response.json())
    ));
}

// Пример использования
fetchDataFromMultipleAPIs(["api1", "api2", "api3"])
    .then(data => console.log(data))
    .catch(error => console.error(error));
