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
    
    $("#store-button").on("click", function(){
        $("#info-page").hide();
        $("#storeFront").show();
    });
    
    $("#startGame-button").on("click", function(){
        $("#storeFront").hide();
        $("#gamePlay").show();
    });
    
    initializePage();
})


