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
            }
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



        // function eventRandom() {
        //     var randomizer = randomEvents[Math.floor(Math.random()*randomEvents.length)];
        //     console.log(randomizer)
        //     switch (randomizer) {
        //         case 'flat tire': 
        //         // replace tire if you have one OR wait for AAA
        //         if (tire) {
        //             tire = 0 //sets value to false
        //             confirm("Do you want to wait for AAA or use your spare tire?");
        //         }else {
        //             alert("You must wait for AAA");
        //         }
        //         break;
        //         case 'pulled over':
        //             alert("you have been pulled over! You lost time and have to pay a fine of $150")
        //         break;
        //         case 'traffic jam': 

        // }
        // given a certain probability, an event will be called.
        // if the event is not called, timer resets to 5 (or whatever interval is decided)
        // if the event is called, 
    // };

    function displayEvent() {
        $("#gamePlay").show().append();
    };

})