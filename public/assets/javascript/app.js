$(document).ready(function () {
    function initializePage() {
        $("#progress-page").hide();
        $("#info-page").hide();
    };
    initializePage();
    $("#start-button").on("click", function () {
        $("#welcome-page").hide();
        $("#info-page").show();
    });
    
    $("#begin-button").on("click", function(){
        $("#info-page").hide();
        $("#progress-page").show();
    });

    function loadPageDisplay() {
        $("#img-div").html("<img src='assets/images/driving-cat.gif'></img>");
    }
    loadPageDisplay();

})


