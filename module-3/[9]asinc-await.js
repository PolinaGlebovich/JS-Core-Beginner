async function fetchDataFromMultipleServers(urls) {
    try {
        const promises = urls.map(url => fetch(url).then(response => response.json()));
        const data = await Promise.all(promises);
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Пример использования
fetchDataFromMultipleServers(["url1", "url2", "url3"])
    .then(data => console.log(data))
    .catch(error => console.error(error));
