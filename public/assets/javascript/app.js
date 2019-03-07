$(document).ready(function () {
    function initializePage() {
        $("#progress-page").hide();
        $("#info-page").hide();
        $("#storeFront").hide();
        $("#gamePlay").hide();
    };

    $("#start-button").on("click", function () {
        $("#welcome-page").hide();
        $("#info-page").show();
    });

    $("#store-button").on("click", function () {
        $("#info-page").hide();
        $("#storeFront").show();
    });

    $("#startGame-button").on("click", function () {
        initializeTravel();
    });

    initializePage();

    var probability = function (n) {
        return !!n && Math.random() <= n;
    };

    var timer = 5;

    function initializeTravel() {
        $("#randomEvent").hide();
        $("#storeFront").hide();
        $("#gamePlay").show();
        var intervalId = setInterval(travelUpdate, 1500);

    };

    var distance = 100;
    var food = 100;
    var water = 100;
    var gas = 100;


    function travelUpdate() {
        if (timer === 0) {
            eventRandom();
        }
        else {
            console.log(timer);
            timer--;


            distance -= 5;
            food -= 1;
            water -= 1;
            gas -= 2;

            $("#food-remaining").text(food);
            $("#water-remaining").text(water);
            $("#gas-remaining").text(gas);
            $("#distance-remaining").text(distance);
        }
    };

    function eventRandom() {
        var trueFalse = probability(.3);

        if (trueFalse) {
            displayEvent();
            // call function
        }

        else {
            timer = 5;

        }
        // given a certain probability, an event will be called.
        // if the event is not called, timer resets to 5 (or whatever interval is decided)
        // if the event is called, 
    };

    function displayEvent() {
        $("#randomEvent").show().append("Text and stuff");
    };

})