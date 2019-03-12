// global Variables
var timer = 18000;
var tire = 1; //sets tire value to true
var cash = 200
var timeFactor = 3;
var food = 100;
var water = 100;
var gas = 100;
var distance = 280;
var momentTimer;
var locationTracker = 0;
var eventTracker = 0;
var nextLocation = 40;
var intervalId;

var eventsArray = [
    // {
    //     event: "test",
    //     function: test
    // },
    {
        event: "Driving through some local streets, you hit a pothole (of course) and pop your tire. What do you do?",
        function: checkTire
    },
    {
        event: "In the distance you see a hitchhiker. You're running low on cash, and if you take them they'll give you some gas money - BUT it could significantly delay your trip. What do you do?",
        function: hitchhiker
    },
    {
        event: "As you drive down the highway, you run into a ton of shore traffic! What do you do now?",
        function: traffic
    },
    {
        event: "In an attempt to make up time, you speed down the highway. Rut roh! The cops caught you and pulled you over. Do you:",
        function: speeding
    },
    {
        event: "You drank too much water and need a bathroom break - so you pull over at the nearest rest stop.",
        // function: updateInventory
    },
    {
        event: "Driving through the streets of the city, you get swarmed by a horde of gang members who stop your car and demand you give them $100. Do you:",
        function: gang
    },
    {
        event: "You get within Cape May early, and decide to stop at Ocean City for some taffy. Yum! Do you:",
        function: taffy
    }
]

$(document).ready(function () {
    // Pre-game Logic
    function initializePage() {
        $("#randomEvent").hide();
        $("#info-page").hide();
        $("#storeFront").hide();
        $("#gamePlay").hide();
        $("#options").hide();
    };

    initializePage();

    //Carousel of images for front page
    $('.carousel').carousel({
        interval: 3000
    });

    // Pre-game page logic
    $("#start-button").on("click", function () {
        $("#welcome-page").hide();
        $("#info-page").show();
    });

    $("#startGame-button").on("click", function () {
        $("#info-page").hide();
        $("#gamePlay").show();
        travel();
        $(".timer").show();
        intervalId = setInterval(travel, 1300);
    });

    // $("#store-button").on("click", function(){
    //     $("#info-page").hide();
    //     $("#storeFront").show();
    // });


    function travel() {
        momentTimer = moment.utc(timer * 1000).format("hh:mm:ss");
        $(".gameImage").html("<img src='/assets/images/driving-cat.gif' id='game-image'>");
        timer -= 60
        timeFactor -= 1;
        $(".timer").text(momentTimer);

        $("#food-remaining").text(food);
        $("#water-remaining").text(water);
        $("#gas-remaining").text(gas);
        $("#cash-remaining").text(cash);
        $(".distanceLeft").text("Distance Remaining: " + distance + " miles");
        $(".eventTrigger").text("Distance to Next Location: " + nextLocation + " miles");
        $("#tires-remaining").text(tire);


        if (timeFactor == 0) {
            nextLocation -= 5;
            distance -= 5;
            food -= 1;
            water -= 1;
            gas -= 2;

            $("#food-remaining").text(food);
            $("#water-remaining").text(water);
            $("#gas-remaining").text(gas);
            $("#tires-remaining").text(tire);
            $("#cash-remaining").text(cash);
            $("#distance-remaining").text("Distance Remaining: " + distance + " miles");
            timeFactor = 3;
        }

        if (nextLocation < 0) {
            clearInterval(intervalId);
            runLocationQuery();
            runEvent();
        }
    }

    function runEvent() {
        for (var i = 0; i < events.length; i++)
            eventsArray[i].function;
    }

    // function checkTire() {
    //     if (tire = 1) {
    //         choices = ["Replace your own tire","Call AAA","Cry"];
    //             if (this.choices[0]) {
    //                 $("#eventBox").text("You replace your own tire and lose 5 minutes.");
    //                 tire--;
    //                 timer -= 5;
    //                 intervalId = setInterval(travel, 1300);
    //             }
    //             else if (this.choices[2]) {
    //                 $("#eventBox").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
    //                 timer -= 10;
    //                 checkTire();
    //             }
    //             else {
    //                 $("#eventBox").text("You have to call AAA and lose 30 minutes.");
    //                 timer -= 30;
    //                 intervalId = setInterval(travel, 1300);
    //             }
    //     }
    //     else {
    //         choices = ["Call AAA","Cry"]
    //             if (this.choices[2]) {
    //                 $("#eventBox").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
    //                 timer -= 10;
    //                 checkTire();
    //             }
    //             else {
    //                 $("#eventBox").text("You have to call AAA and lose 30 minutes.");
    //                 timer -= 30;
    //                 intervalId = setInterval(travel, 1300);
    //             }
    //     }
    // }




})




function checkTire() {
    if (tire == 1) {
        choices = ["Replace your own tire", "Call AAA", "Cry"];
        $("options")

        for (var i = 0; i < choices.length; i++)
            var button = $("<button>");
        button.addClass("choiceOptions");
        button.attr("data-choice", choices[i]);
        button.text(choices[i]);
        $("#options").append(button)

        $("#eventActive").animatedModal();

        if (this.choices[0]) {
            // CLOSE MODAL
            $("#eventText").text("You replace your own tire and lose 5 minutes.");
            tire--;
            timer -= 5;
            travel();
        }
        else if (this.choices[2]) {
            $("#eventBox").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
            timer -= 10;
            checkTire();
        }
        else {
            $("#eventBox").text("You have to call AAA and lose 30 minutes.");
            timer -= 30;
            travel();
        }
    }
    else {
        choices = ["Call AAA", "Cry"]
        if (this.choices[2]) {
            $("#eventBox").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
            timer -= 10;
            checkTire();
        }
        else {
            $("#eventBox").text("You have to call AAA and lose 30 minutes.");
            timer -= 30;
            travel();
        }
    }
}

function traffic() {
    randomNumber = Math.random()
    choices = ["Stay the course", "Take a detour"]
    if (this.choices[0]) {
        if (randomNumber <= 0.5) {
            $("#eventBox").text("Traffic cleared up! No time lost!");
            travel();
        }
        else {
            $("#eventBox").text("Traffic did not clear. Lost 30 minutes.");
            timer -= 30;
            travel();
        }
    }
    else {
        if (randomNumber <= 0.5) {
            $("#eventBox").text("Successful detour! No time lost!");
            travel();
        }
        else {
            $("#eventBox").text("Detour took you way out of the way. Lost 15 minutes.");
            timer -= 15;
            travel();
        }
    }
}

function speeding() {
    randomNumber = Math.random()
    choices = ["Attempt to bribe the cop and possibly make up more time", "Pay the fine immediately to save on losing more time"]
    if (this.choices[0]) {
        if (randomNumber <= 0.5) {
            $("#eventBox").text("They accepted - you speed away and manage to gain back 10 minutes.");
            timer += 10;
            cash -= 100;
            travel();
        }
        else {
            $("#eventBox").text("They laughed at you and arrest you on the spot. Good game.");
            gameEnd();
        }
    } else {
        timer += 5;
        cash -= 150;
        travel();
    }

}

function hitchhiker() {
    randomNumber = Math.random();
    choices = ["Let them in", "Keep going"]
    if (this.choices[0]) {
        if (randomNumber <= 0.5) {
            $("#eventBox").text("Their stop is on your way! They give you 20 bucks for gas!");
            cash += 20;
            travel();
        }
        else if (randomNumber >= 0.9) {
            $("#eventBox").text("They're insane and pull a gun on you, taking your car and your cash. At least you're alive!");
            gameEnd();
        }
        else {
            $("#eventBox").text("They're going slightly out of the way - you lose 15 minutes");
            timer -= 15;
            travel();
        }
    }
}

function gang() {
    randomNumber = Math.random();
    $("#gangFunction").gangModal();
    choices = ["Pay the toll", "Attempt to speed away"]
    if (this.choices[0]) {
        $("#eventBox").text("Cool. Move along - they let you by.");
        cash -= 100
        travel();
    } else if (randomNumber <= .4) {
        $("#eventBox").text("You manage to escape! Well done! Pretty risky...");
        travel();
    } else if (randomNumber >= .8) {
        $("#eventBox").text("You tear out of there alive, but the cops catch up to you on the highway");
        speeding();
    } else {
        $("#eventBox").text("They shot you as you drove away. Too bad.");
        gameEnd();
    }

}

function taffy() {
    choices = ["Buy taffy for the wedding present!", "Buy all the taffy you can!!!!"]
    if (this.choices[0]) {
        cash -= 50;
        taffy += 5
        gameWin();
    } else {
        cash -= 100;
        taffy += 10;
        gameWin();
    }

}


function gameEnd() {
    $("#eventBox").text("Nice try - but YOU LOSE! Try again?");
}

function gameWin() {
    $("#eventBox").text("Well done! You made it - congratulations! You win!");
}