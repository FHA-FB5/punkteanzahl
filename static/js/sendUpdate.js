var socket = io();

$(function () {
    $('#add_a').click(() => {
        let num = +$("#points_a").text() + 1;
        $("#points_a").text(num);
        sendUpdate();
    });

    $('#sub_a').click(() => {
        let num = +$("#points_a").text() - 1;
        $("#points_a").text(num); 
        sendUpdate();   
    });

    $('#add_b').click(() => {
        let num = +$("#points_b").text() + 1;
        $("#points_b").text(num);
        sendUpdate();
    });

    $('#sub_b').click(() => {
        let num = +$("#points_b").text() - 1;
        $("#points_b").text(num);    
        sendUpdate();
    });

    $('#name_a').on('input', () => {
        sendUpdate();
    });

    $('#name_b').on('input', () => {
        sendUpdate();
    });
});

function sendUpdate() {
    socket.emit('update', { name_a: $('#name_a').val(), points_a: $('#points_a').text(), name_b: $('#name_b').val(), points_b: $('#points_b').text() });
}