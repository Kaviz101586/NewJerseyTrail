function waterLoss(loss, id) {
    $.ajax({ url: "api/inventory/" + id, method: "GET" })
        .then(function (inventoryData) {
            console.log(inventoryData);
            console.log('-------------');
        });
}

waterLoss();