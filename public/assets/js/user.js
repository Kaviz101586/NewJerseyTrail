$(document.ready(function() {
    var nameInput = $("userName");
    var inventoryList = $("tbody");
    var inventoryContainer = $(".inventory-container");

    // $(document).on("purchase", "#inventory", updateInventory);

    enterUsername();
    setInventory();

    function enterUsername() {
        $(document).on("click", "#usernameArea", )
    }

    function SetInventory(food, water, gas, cash, tire) {
        this.food = 0;
        this.water = 0;
        this.gas = 100;
        this.cash = 1000;
        this.tire = true;
    }

    var userInventory = new SetInventory






        $("more-button").on("click", function() {
            inventory.food++
        })
        $("less-button").on("click", function() {
            inventory.food--
        }
    }




    function startingInventory () {
        $.get("/api/inventory", function(e) {
            var inventory = [];

        })
    }



    function updateInventory(e) {
        event.preventDefault();

        if ()
    }







}))