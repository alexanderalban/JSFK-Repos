$('html').mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
        right: event.pageY,
    })
});

// $('html').click(function (event) {
//     $("#heading").offset({
//         left: event.pageX,
//         right: event.pageY,
//     })
// });