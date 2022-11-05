var socket = io();

$(document).ready(function () {
    socket.on('update', function (data) {
        $('#name_a').html(data.name_a);
        $('#points_a').html(data.points_a);
        $('#name_b').html(data.name_b);
        $('#points_b').html(data.points_b);
    });
});