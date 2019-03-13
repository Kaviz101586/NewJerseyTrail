// global Variables
var timer = 300;
var tire = 1; //sets tire value to true
var cash = 200
var timeFactor = 3;
var food = 100;
var water = 100;
var gas = 100;
var distance = 240;
var momentTimer;
var eventTracker = 0;
var nextLocation = 40;
var intervalId;
var locationTracker = 0;
var userSelect;

function Location(place, route, ableToPurchase, event, type) {
    this.place = place;
    this.route = route;
    this.ableToPurchase = ableToPurchase;
    this.event = event;
    this.type = type;
}

var locations =
{
    1: new Location("Patterson", 1, "N", "Global", "Urban"),
    2: new Location("Newark", 1, "Y", "Global", "Highway"),
    3: new Location("Asbury Park", 1, "Y", "Specific", "Rural"),
    4: new Location("Toms River", 1, "Y", "Global", "Rural"),
    5: new Location("PNC Bank Arts Center", 1, "Y", "Specific", "Rural"),
    6: new Location("Atlantic City", 1, "Y", "Specific", "Urban"),
    7: new Location("Ocean City", 1, "N", "Global", "Rural")
};

var locationsArray = Object.values(locations)

var eventsArray = [
    {
        event: "Driving through some local streets, you hit a pothole (of course) and pop your tire. What do you do?",
        choices: ["Replace your own tire", "Call AAA", "Cry"],
        responses: ["You replace your own tire and lose 5 minutes.","You have to call AAA and lose 30 minutes.", "You decide to cry on the side of the road. An hpur later, someone's stopped and helped you on yor way again."],
        name: "checkTire"
    },
    {
        event: "In the distance you see a hitchhiker. Sure, you know its illegal in NJ, but someone to ride with might be fun! What do you do?",
        choices: ["Keep going", "Let them in", "Take them to breakfast!"],
        responses: ["Wave as you drive by!", "Their stop is on your way! Way to make a new friend!","They're insane and pull a gun on you, threatening to take your car and cash - but diving out the speeding car at the last second for some reasons. You lose an hour but at least you're alive!"],
        name: "hitchhiker"
    },
    {
        event: "As you drive down the highway, you run into a ton of shore traffic! What do you do now?",
        choices: ["Stay the course", "Take a detour", "Stop and get some food, and hope the traffic clears!"],
        responses: ["Traffic cleared up! No time lost!","Detour took you way out of the way. Lost 30 minutes.", "You knew that was going to go poorly for you, right? Another hour shot. Womp womp"],
        name: "traffic"
    },
    {
        event: "You need to stop at a rest stop. Do you:",
        choices: ["Go to Dunkin'", "Go to Cinnabon", "Go to Starbucks"],
        responses: ["Short line, because everyone knows America runs on Dunkin'. Only took 5 minutes!","Got the bun in record time, but obviously ate it while it was hot. You lost another 30, but TOTALLY worth it.", "That's what you get trying to purchase designer coffee."] ,
        name: "speeding"
    },
    // {
    //     event: "You drank too much water and need a bathroom break - so you pull over at the nearest rest stop.",
    //     choices: ,
    //     responses: ,
    //     name: "updateInventory"
    // },
    {
        event: "Driving through the streets of the city, you get swarmed by a horde of gang members who stop your car and demand you give them $100. Do you:",
        choices: ["Pay the toll", "Try to reason with them.","Attempt to speed away"],
        responses: ["Cool. Move along - they let you by.", "You manage to escape! Well done! Pretty risky...", "Great idea, genius. They give chase and it takes you a while to lose them."],
        name: "gang"
    },
    {
        event: "You get within Cape May early, and decide to stop at Ocean City for some taffy. Yum! Do you:",
        choices: ["Buy taffy for the wedding present!", "Buy all the taffy you can!!!!", "EAT ALL THE TAFFY!"], 
        responses: ["That's a lovely present. Well done.","TAFFY!!!!!!","TAFFY!!!!!!"],
        name: "taffy"
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

    // function runEvent() {
    //     for (var i = 0; i < eventsArray.length; i++)
    //         eventsArray[i].function;
    // }

    function travel() {
        if (timer >= 60) {
            momentTimer = moment.utc(timer * 60000).format("hh:mm:ss");
        }
        else if (timer < 60) {
            momentTimer = moment.utc(timer * 60000).format("mm:ss");
        }
        $(".gameImage").html("<img src='/assets/images/driving-cat.gif' id='game-image'>");
        timer -= 1;
        timeFactor -= 1;
        $(".timer").text(momentTimer);

        $("#food-remaining").text(food);
        $("#water-remaining").text(water);
        $("#gas-remaining").text(gas);
        $("#cash-remaining").text(cash);
        $(".distanceLeft").text("Distance Remaining: " + distance + " miles");
        $(".eventTrigger").text("Distance to Next Location: " + nextLocation + " miles");
        $("#tires-remaining").text(tire);


        if (timeFactor == 0 && nextLocation > 0) {
            nextLocation -= 20;
            distance -= 20;
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

        else if (nextLocation ==  0) {

            clearInterval(intervalId);
            populateModal();
            // passThroughChoice();
            // runLocationQuery();
            // runEvent();
            
        }

        else if (distance == 0 && nextLocation ==0) {
            timeFactor = -1;
            gameWin();
        }


    }


    function populateModal() {
        // clearInterval(intervalId);
        var text = eventsArray[eventTracker].event;
        $("#modalBtnDiv").empty();
        $("#modalText").empty();
        $("#eventsModal").modal('show');
        $("#modalText").append(text)
        for (var i = 0; i < eventsArray[eventTracker].choices.length; i++) {

            var choiceBtn = $("<button>")
                .addClass("choice-button btn ")
                .attr("data-choice", eventsArray[eventTracker].choices[i])
                .attr("data-response", eventsArray[eventTracker].responses[i])
                .attr("data-dismiss", "modal")
                .text(eventsArray[eventTracker].choices[i]);

            $("#modalBtnDiv").append(choiceBtn);
        }
        // dynamically load responses after clicking choiceBtn
        $(".choice-button").on('click', function () {
            var responseText = $(this).attr("data-response");

            $("#modalBtnDiv").empty();
            $("#modalText").empty();
            $("#eventsModal").modal('show');
            $("#modalText").append(responseText)
        })
    };
    
    function passThroughChoice() {
            clearInterval(intervalId);
        // if($(this).attr("data-choice")) {
            var userSelect = $(this).attr("data-choice");
            console.log(userSelect);
            
            if (userSelect === eventsArray[eventTracker].choices[0]) {
                // $("#modalText").hide();
                // $("#modalBtnDiv").hide();
                // $("#response").show();
                console.log("choice 1 selected");
                $("#eventsModal2").modal('show');
                $("#response").append(eventsArray[eventTracker].responses[0]);
                timer -= 5;
                nextLocation = 40;
                intervalId = setInterval(travel, 1300);
                eventTracker++;
            }
            else if (userSelect === eventsArray[eventTracker].choices[1]) {
                // $("#modalText").hide();
                // $("#modalBtnDiv").hide();
                // $("#response").show();
                console.log("choice 2 selected");
                $("#response").text(eventsArray[eventTracker].responses[1]);
                timer -= 30;
                nextLocation = 40;
                intervalId = setInterval(travel, 1300);
                eventTracker++;
            }
            else if (userSelect === eventsArray[eventTracker].choices[2]) {
                // $("#modalText").hide();
                // $("#modalBtnDiv").hide();
                // $("#response").show();
                console.log("choice 3 selected");
                $("#response").text(eventsArray[eventTracker].responses[2]);
                timer -= 60;
                // checkTire();
                nextLocation = 40;
                intervalId = setInterval(travel, 1300);
                eventTracker++;
            }
        // }

        // var choice = $(this).attr("data-choice");

        // if(choice == choices[0]) {
        //     $("#response").text(responses[0])
        // } else if (choice == choices[1]) {
        //     $("#response").text(responses[1])
        // } else if (choice == choices[2]) {
        //     $("#response").text(responses[2])
        // } 


    }


    // function checkTire() {
    //     if (tire == 1) {
    //         choices = ["Replace your own tire", "Call AAA", "Cry"];
    //         responses = ["You replace your own tire and lose 5 minutes.","You have to call AAA and lose 30 minutes.","You decide to cry and waste more time. Ten minutes later you finally calm down."]
           
    //         populateModal();

          
    //     }
    //     else if (tire == 0) {
    //         choices = ["Call AAA", "Cry"];
    //         populateModal();
    //         if (userSelect == this.choices[1]) {
    //             // $("#modalText").hide();
    //             // $("#modalBtnDiv").hide();
    //             // $("#response").show();
    //             $("#response").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
    //             timer -= 10;
    //             checkTire();
    //         }
    //         else if (userSelect == this.choices[0]) {
    //             // $("#modalText").hide();
    //             // $("#modalBtnDiv").hide();
    //             // $("#response").show();
    //             $("#response").text("You have to call AAA and lose 30 minutes.");
    //             timer -= 30;
    //             intervalId = setInterval(travel, 1300);
                
    //         }
    //     }
    // }

    //     function checkTire() {
    //         if (tire == 1) {
    //             choices = ["Replace your own tire", "Call AAA", "Cry"];
    //             $("options")

    //             for (var i = 0; i < choices.length; i++)
    //             var button = $("<button>");
    //             button.addClass("choiceOptions");
    //             button.attr("data-choice", choices[i]);
    //             button.text(choices[i]);
    //             $("#options").append(button)

    //             $("#eventActive").animatedModal();

    //             if (this.choices[0]) {
    //                 // CLOSE MODAL
    //                 $("#eventText").text("You replace your own tire and lose 5 minutes.");
    //                 tire--;
    //                 timer -= 5;
    //                 travel();
    //             }
    //             else if (this.choices[2]) {
    //                 $("#eventBox").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
    //                 timer -= 10;
    //                 checkTire();
    //             }
    //             else {
    //                 $("#eventBox").text("You have to call AAA and lose 30 minutes.");
    //                 timer -= 30;
    //                 travel();
    //             }
    //         }
    //         else {
    //             choices = ["Call AAA", "Cry"]
    //             if (this.choices[2]) {
    //                 $("#eventBox").text("You decide to cry and waste more time. Ten minutes later you finally calm down.");
    //                 timer -= 10;
    //                 checkTire();
    //             }
    //             else {
    //                 $("#eventBox").text("You have to call AAA and lose 30 minutes.");
    //                 timer -= 30;
    //                 travel();
    //             }
    //         }
    //     }

    //     function traffic() {
    //         randomNumber = Math.random()
    //         choices = ["Stay the course", "Take a detour"]
    //         if (this.choices[0]) {
    //             if (randomNumber <= 0.5) {
    //                 $("#eventBox").text("Traffic cleared up! No time lost!");
    //                 travel();
    //             }
    //             else {
    //                 $("#eventBox").text("Traffic did not clear. Lost 30 minutes.");
    //                 timer -= 30;
    //                 travel();
    //             }
    //         }
    //         else {
    //             if (randomNumber <= 0.5) {
    //                 $("#eventBox").text("Successful detour! No time lost!");
    //                 travel();
    //             }
    //             else {
    //                 $("#eventBox").text("Detour took you way out of the way. Lost 15 minutes.");
    //                 timer -= 15;
    //                 travel();
    //             }
    //         }
    //     }

    //     function speeding() {
    //         randomNumber = Math.random()
    //         choices = ["Attempt to bribe the cop and possibly make up more time", "Pay the fine immediately to save on losing more time"]
    //         if (this.choices[0]) {
    //             if (randomNumber <= 0.5) {
    //                 $("#eventBox").text("They accepted - you speed away and manage to gain back 10 minutes.");
    //                 timer += 10;
    //                 cash -= 100;
    //                 travel();
    //             }
    //             else {
    //                 $("#eventBox").text("They laughed at you and arrest you on the spot. Good game.");
    //                 gameEnd();
    //             }
    //         } else {
    //             timer += 5;
    //             cash -= 150;
    //             travel();
    //         }

    //     }

    //     function hitchhiker() {
    //         randomNumber = Math.random();
    //         choices = ["Let them in", "Keep going"]
    //         if (this.choices[0]) {
    //             if (randomNumber <= 0.5) {
    //                 $("#eventBox").text("Their stop is on your way! They give you 20 bucks for gas!");
    //                 cash += 20;
    //                 travel();
    //             }
    //             else if (randomNumber >= 0.9) {
    //                 $("#eventBox").text("They're insane and pull a gun on you, taking your car and your cash. At least you're alive!");
    //                 gameEnd();
    //             }
    //             else {
    //                 $("#eventBox").text("They're going slightly out of the way - you lose 15 minutes");
    //                 timer -= 15;
    //                 travel();
    //             }
    //         }
    //     }

    //     function gang() {
    //         randomNumber = Math.random();
    //         $("#gangFunction").gangModal();
    //         choices = ["Pay the toll", "Attempt to speed away"]
    //         if (this.choices[0]) {
    //             $("#eventBox").text("Cool. Move along - they let you by.");
    //             cash -= 100
    //             travel();
    //         } else if (randomNumber <= .4) {
    //             $("#eventBox").text("You manage to escape! Well done! Pretty risky...");
    //             travel();
    //         } else if (randomNumber >= .8) {
    //             $("#eventBox").text("You tear out of there alive, but the cops catch up to you on the highway");
    //             speeding();
    //         } else {
    //             $("#eventBox").text("They shot you as you drove away. Too bad.");
    //             gameEnd();
    //         }

    //     }

    // })
    //     function taffy() {
    //         choices = ["Buy taffy for the wedding present!", "Buy all the taffy you can!!!!"]
    //         if (this.choices[0]) {
    //             cash -= 50;
    //             taffy += 5
    //             gameWin();
    //         } else {
    //             cash -= 100;
    //             taffy += 10;
    //             gameWin();
    //         }

    //     }


    //     function gameEnd() {
    //         $("#eventBox").text("Nice try - but YOU LOSE! Try again?");
    //     }

        function gameWin() {
            postInventory();
            $(".gameImage").html("<img src='/assets/images/you-win.webp' id='winning-image'>");
        }

$(document).on("click",".choice-button", passThroughChoice);
})