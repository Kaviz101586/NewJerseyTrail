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

$('#startGame-button').on('click', function(event){
    event.preventDefault();

    gameOver();
})

// $('#startGame-button').on('click', function (event) {
//     event.preventDefault();

//     // Create a new user and add it the db
//     var newUser = {
//         name: $('#inputName').val().trim()
//     }
//     $.post('api/user', newUser).then(function (data) {
//         console.log(data)
//     })
//     // Create a new inventory and add it the db
//     var newInventory = {
//         food: 100,
//         water: 100,
//         cash: 100,
//         gas: 100,
//         tire: true
//     }
//     $.post('api/inventory', newInventory).then(function (data) {
//         console.log(data);
//     })

//     console.log(newUser);
//     console.log(newInventory);
// })

function gameOver() {
    var newInventory = {
        userName: $('#inputName').val().trim(),
        food: food,
        water: water,
        gas: gas,
        tire: tire
    }
    $.post('api/inventory', newInventory).then(function (data) {
        console.log(data);
    })
}
    // let name = newUser.name;
    // let food = newInventory.food;
    // let water = newInventory.water;
    // let cash = newInventory.cash;
    // let gas = newInventory.gas;
    // let tire = newInventory.tire;

    // // $('.div-to-be-hidden').append(`<input name='name' value='${name}' class='d-none' id='name-input'`)
    // // $('.div-to-be-hidden').append(`<input name='food' value='${food}' class='d-none' id='food-input'`)
    // // $('.div-to-be-hidden').append(`<input name='water' value='${water}' class='d-none' id='water-input'`)
    // // $('.div-to-be-hidden').append(`<input name='cash' value='${cash}' class='d-none' id='cash-input'`)
    // // $('.div-to-be-hidden').append(`<input name='gas' value='${gas}' class='d-none' id='gas-input'`)
    // // $('.div-to-be-hidden').append(`<input name='tire' value='${tire}' class='d-none' id='tire-input'`)

    // console.log(name, food, water, cash, gas, tire);

    // var sessionUser = {
    //     name: name,
    //     food: food,
    //     water: water,
    //     cash: cash,
    //     gas: gas,
    //     tire: tire
    // }

    // localStorage.setItem('currentUser', JSON.stringify(sessionUser));

    // var checkUser = localStorage.getItem('currentUser');

    // console.log(JSON.parse(localStorage.getItem('currentUser')));



    // console.log(newUser);
    // console.log(newInventory);


    // $.get('api/inventory', function(data){
    //     console.log(data);
    // })


