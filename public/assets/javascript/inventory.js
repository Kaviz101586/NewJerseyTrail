function postInventory() {
    var newInventory = {
        userName: $('#inputName').val().trim(),
        taffy: taffy,
        food: food,
        water: water,
        gas: gas,
        
    }
    $.post('api/inventory', newInventory).then(function (data) {
        console.log(data);
    })
}