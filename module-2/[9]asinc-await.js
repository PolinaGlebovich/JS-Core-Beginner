async function loadDataAndSendRequest() {
    try {
        const firstData = await fetchDataFromServer("firstUrl");
        const secondData = await fetchDataFromServer("secondUrl/" + firstData.id);
        console.log(secondData);
    } catch (error) {
        console.error(error);
    }
}

loadDataAndSendRequest();
