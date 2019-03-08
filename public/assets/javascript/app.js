$(document).ready(function () {
// carosuel for front page
$('.carousel').carousel({
    interval: 3000
  })


// Game Logic
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
    
<<<<<<< HEAD
    // $("#store-button").on("click", function(){
    //     $("#info-page").hide();
    //     $("#storeFront").show();
    // });
    
    $("#startGame-button").on("click", function(){
        $("#info-page").hide();
=======
    $("#store-button").on("click", function(){
        $("#info-page").hide();
        $("#storeFront").show();
    });
    
    $("#startGame-button").on("click", function(){
>>>>>>> 817b16057f9730cfdfacbcb3773f4fa27bfeafea
        $("#storeFront").hide();
        $("#gamePlay").show();
        var intervalId = setInterval(travel, 1000);
    });
    
    initializePage();



var timer = 5;

function travel() {
    timer --;

<<<<<<< HEAD
    // distance - 5;
    food -= 1;
    water -= 1;
    gas -= 2;
=======
    distance - 5;
    food - 1;
    water - 1;
    gas - 2;
>>>>>>> 817b16057f9730cfdfacbcb3773f4fa27bfeafea

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