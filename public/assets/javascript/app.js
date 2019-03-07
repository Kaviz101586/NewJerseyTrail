$(document).ready(function () {
    function initializePage() {
        $("#randomEvent").hide();
        $("#info-page").hide();
        $("#storeFront").hide();
        $("#gamePlay").hide();
    };

    $("#start-button").on("click", function () {
        $("#welcome-page").hide();
        $("#info-page").show();
    });
    
    $("#store-button").on("click", function(){
        $("#info-page").hide();
        $("#storeFront").show();
    });
    
    $("#startGame-button").on("click", function(){
        $("#storeFront").hide();
        $("#gamePlay").show();
        var intervalId = setInterval(travel, 1000);
    });
    
    initializePage();



var timer = 5;

function travel() {
    timer --;

    distance - 5;
    food - 1;
    water - 1;
    gas - 2;

    $("#food-remaining").text("Food: ") + food;
    $("#water-remaining").text("Water: ") + water;
    $("#gas-remaining").text("Gas: ") + gas;
    $("#distance-remaining").text("Distance Remaining: ") + distance;

    if (timer == 0) {
        eventRandom();
    }
};

function eventRandom() {
    // given a certain probability, an event will be called.
    // if the event is not called, timer resets to 5 (or whatever interval is decided)
    // if the event is called, 
};

function displayEvent() {
    $("#gamePlay").show().append();   
};

})