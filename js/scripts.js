// $(function () {
//     $(".carousel").carousel({ interval: 2000 });
//     $("#carouselButton").click(function () {
//         if ($("carouselButton").children("i").hasClass("fa-pause")) {
//             $(".carousel").carousel("pause");
//             $("#carouselButton").children("i").removeClass("fa-pause");
//             $("#carouselButton").children("i").addClass("fa-play");
//         } else {
//             $(".carousel").carousel("cycle");
//             $("#carouselbutton").children("i").removeClass("fa-play");
//             $("#carouselButton").children("i").addClass("fa-pause");
//         }
//     });
// });
// $("reserveButton").onclick(function(){
//     $("#reserveButton").modal();
// });
$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselbutton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});
$("#loginButton").on( "click", function() {
    $("#loginModal").modal("toggle");
})
$("#reserveButton").on( "click", function() {
    $("#reserveModal").modal("toggle");
    })
// $("#loginButton").on( "click", function() {
//     $("#loginModal").modal("toggle");
// })
// $("#reserveButton").on( "click", function() {
//     $("#reserveModal").modal("toggle");
// })

// $('#reserveButton').click(e => {
//     $('#reserveModal').modal('show');
// })
// $('#loginButton').click(e => {
//     $('#loginModal').modal('show');
// })