$(document).ready(function() {
    $("#arrow").click(function() {
        $("html,body").animate({ scrollTop: screen.height }, "slow");
    });

    $(".hambuerger").click(function() {
        $(".wrapper").toggleClass("collapse");
    });
});