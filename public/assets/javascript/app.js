$(document).ready(function() {
    function initializePage() {
        $("#progress-page").hide();
    };
    initializePage();
$("#start-button").on("click", function() {
    $("#welcome-page").hide();
    $("#progress-page").show();
    loadPageDisplay();
});

function loadPageDisplay() {
    $("#img-div").html("<img src='assets/images/driving-cat.gif'></img>");
}

})


