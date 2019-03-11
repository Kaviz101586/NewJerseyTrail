$(document).ready(function () {
    // app.get('api/inventory', function(req,res){
    //    console.log(res.json);

    // })
    // carosuel for front page
    $('.carousel').carousel({
        interval: 3000
    })


        // global Variables
        var randomEvents = ['flat tire', 'pulled over', 'traffic jam', 'bathroom break', 'out of fuel'];
        var timer = 300;
        var tire = 1; //sets tire vaule to true
        var timeFactor = 5;
        var intervalId; 

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
        $(".timer").show();
    });
    
    // $("#store-button").on("click", function(){
        //     $("#info-page").hide();
        //     $("#storeFront").show();
        // });
        
        $("#startGame-button").on("click", function () {

            var intervalId;
            $("#info-page").hide();
            $("#storeFront").hide();
            $("#gamePlay").show();

            var intervalId = setInterval(travel, 1300);

        });
        
        initializePage();
        
        
   
        function travel() {

            // timer--;
            momentTimer = moment.utc(timer*1000).format("mm:ss")
            timer -= 1;
            timeFactor -= 1;

            $(".timer").html(momentTimer);
            
            $("#food-remaining").text(food);
                $("#water-remaining").text(water);
                $("#gas-remaining").text(gas);
                $("#distance-remaining").text(distance);

            
            if (timeFactor == 0) {

                distance - 5;
                food -= 1;
                water -= 1;
                gas -= 2;

                $("#food-remaining").text("Food: ") + food;
                $("#water-remaining").text("Water: ") + water;
                $("#gas-remaining").text("Gas: ") + gas;
                $("#distance-remaining").text("Distance Remaining: ") + distance;
            }
            eventRandom();

                timeFactor = 5;
                
                eventRandom();
            
            locationTracker++;
        };


        // global Variables
        var randomEvents = ['flat tire', 'pulled over', 'traffic jam', 'bathroom break', 'out of fuel'];

        var timer = 300;


        var tire = 1; //sets tire value to true
        var timeFactor = 5;
        var food = 100;
        var water = 100;
        var gas = 100;
        var distance = 500;
        var momentTimer;



        function runEvent() {
            var eventOccurs = randomEvents[Math.floor(Math.random()*randomEvents.length)];
            console.log(randomizer)
            switch (randomizer) {
                case 'flat tire': 
                // replace tire if you have one OR wait for AAA
                if (tire) {
                    tire = 0 //sets value to false
                    confirm("Do you want to wait for AAA or use your spare tire?");
                }else {
                    alert("You must wait for AAA");
                }
                break;
                case 'pulled over':
                    alert("you have been pulled over! You lost time and have to pay a fine of $150")
                break;
                case 'traffic jam': 

        }
        // given a certain probability, an event will be called.
        // if the event is not called, timer resets to 5 (or whatever interval is decided)
        // if the event is called, 
        };

    function displayEvent() {
        $("#gamePlay").show().append();
    };

})

function checkTire() {
    if (tire = 1) {
        choices = ["Replace your own tire","Call AAA","Cry"];
            if (this.choices[0]) {
                $("#eventBox").text("You replace your own tire and lose 5 minutes.");
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
        choices = ["Call AAA","Cry"]
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


// function updateInventory() {

// }

function traffic() {
    randomNumber = Math.random()
    choices = ["Stay the course","Take a detour"]
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
    choices = ["Attempt to bribe the cop and possibly make up more time","Pay the fine immediately to save on losing more time"]
        if (this.choices[0]) {
            if (randomNumber <=0.5) {
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

function hitchhiker () {
    randomNumber = Math.random();
    choices = ["Let them in", "Keep going"]
        if (this.choices[0]) {
            if (randomNumber <=0.5) {
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
    choices = ["Pay the toll","Attempt to speed away"]
        if (this.choices[0]) {
            $("#eventBox").text("Cool. Move along - they let you by.");
            cash -= 100
            travel();
        } else if (randomNumber <=.4) {
            $("#eventBox").text("You manage to escape! Well done! Pretty risky...");
            travel();
        } else if (randomNumber >=.8) {
            $("#eventBox").text("You tear out of there alive, but the cops catch up to you on the highway");
            speeding();
        } else {
            $("#eventBox").text("They shot you as you drove away. Too bad.");
            gameEnd();
        }

}

function taffy() {
    choices = ["Buy taffy for the wedding present!","Buy all the taffy you can!!!!"]
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