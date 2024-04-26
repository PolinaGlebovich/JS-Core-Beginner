async function fetchDataFromServer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Пример использования
async function getData() {
    const result = await fetchDataFromServer("url");
    console.log(result);
}

getData();
