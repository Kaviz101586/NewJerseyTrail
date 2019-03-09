$(document).ready(function () {
    // app.get('api/inventory', function(req,res){
    //    console.log(res.json);

    // })
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
    
    // $("#store-button").on("click", function(){
        //     $("#info-page").hide();
        //     $("#storeFront").show();
        // });
        
        $("#startGame-button").on("click", function () {
            $("#info-page").hide();
            $("#storeFront").hide();
            $("#gamePlay").show();
            var intervalId = setInterval(travel, 1000);
        });
        
        initializePage();
        
        
   
        function travel() {
            timer--;
            timeFactor --;
            console.log(timer)
            $(".timer").text(moment(timer).format("mm:ss"));
            
            if (timeFactor == 0) {
                // distance - 5;
                timeFactor = 5;
                food -= 1;
                water -= 1;
                gas -= 2;
                $("#food-remaining").text("Food: ") + food;
                $("#water-remaining").text("Water: ") + water;
                $("#gas-remaining").text("Gas: ") + gas;
                $("#distance-remaining").text("Distance Remaining: ") + distance;
                eventRandom();
            }
        };


        // global Variables
        var randomEvents = ['flat tire', 'pulled over', 'traffic jam', 'bathroom break', 'out of fuel'];
        var timer = 300;
        var tire = 1; //sets tire vaule to true
        var timeFactor = 5
    

        function eventRandom() {
            var randomizer = randomEvents[Math.floor(Math.random()*randomEvents.length)];
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
                
                default:
                break;
        }
        // given a certain probability, an event will be called.
        // if the event is not called, timer resets to 5 (or whatever interval is decided)
        // if the event is called, 
    };

    function displayEvent() {
        $("#gamePlay").show().append();
    };

})