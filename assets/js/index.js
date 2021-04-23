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

$("#atraction1").click(function () {
    $("#moreinfo1").toggle();
});
$("#atraction2").click(function () {
    $("#moreinfo2").toggle();
});
$("#atraction3").click(function () {
    $("#moreinfo3").toggle();
});
$("#moreinfo1").hide();
$("#moreinfo2").hide();
$("#moreinfo3").hide();

$("#atraction1").mouseenter(function () {
    $(this).addClass("color-red");
});
$("#atraction1").mouseleave(function () {
    $(this).removeClass("color-red");
});

$("#atraction2").mouseenter(function () {
    $(this).addClass("color-red");
});
$("#atraction2").mouseleave(function () {
    $(this).removeClass("color-red");
});
$("#atraction3").mouseenter(function () {
    $(this).addClass("color-red");
});
$("#atraction3").mouseleave(function () {
    $(this).removeClass("color-red");
});