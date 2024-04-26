function fetchUrls(urls) {
    return Promise.all(urls.map(url => fetch(url).then(response => response.text())));
}

// Пример использования
fetchUrls(["url1", "url2", "url3"])
    .then(contents => console.log(contents))
    .catch(error => console.error(error));
