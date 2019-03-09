// $(document).ready(function () {
//     // function waterLoss(id) {
//     //     $.ajax({
//     //         url: "api/inventory/" + id,
//     //         method: "GET"
//     //     })
//     //         .then(function (inventoryData) {
//     //             console.log(inventoryData);
//     //             console.log('-------------');
//     //         });
//     // }

//     // waterLoss(1);
//     $.ajax({
//         url: 'api/inventory/',
//         method: 'GET'

//     }).then(function (data) {
//         console.log(data);
//         return data.decrement('water', {by: 2});

//     })




// });


$('#startGame-button').on('click', function (event) {
    event.preventDefault();
    var newUser = {
        name: 'Dan'
    }

    var newInventory = {
        food: 100,
        water: 100,
        cash: 100,
        gas: 100,
        tire: true
    };
    
    $.post('api/user', newUser).then(function (data) {
        console.log(data);
    })


    // console.log(newUser);
    // console.log(newInventory);
    $.post('api/inventory', newInventory).then(function (data) {
        console.log(data);
    })
})


