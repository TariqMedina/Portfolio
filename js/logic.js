$(document).ready(function () {
    $(".option").hover(function () {
        $(this).css("background-color", "black");
        $(this).css("opacity", "0.5");
    }, function () {
        $(this).css("background-color", "darkgray");
        $(this).css("opacity", "1");
    });
});