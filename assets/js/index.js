$("#q1").click(function () {
    $("#text1").toggle();
});

$("#q2").click(function () {
    $("#text2").toggle();
});

$("h2").mouseenter(function () {
    $(this).addClass("color-red");
});
$("h2").mouseleave(function () {
    $(this).removeClass("color-red");
});