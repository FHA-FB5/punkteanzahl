var socket = io();

$(document).ready(function () {
    socket.emit('request');
    
    socket.on('request', function (data) {
        $('#name_a').val(data.name_a);
        $('#points_a').text(data.points_a);
        $('#name_b').val(data.name_b);
        $('#points_b').text(data.points_b);
        $('#play_sound').prop('checked', data.play_sound);
        $('#play_confetti').prop('checked', data.play_confetti);

    });

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

    $(':checkbox').change(() => {
        sendUpdate();
    }); 
});

function sendUpdate() {
    socket.emit('update', { name_a: $('#name_a').val(), points_a: $('#points_a').text(), name_b: $('#name_b').val(), points_b: $('#points_b').text(), play_sound: $('#play_sound').is(":checked"), play_confetti: $('#play_confetti').is(":checked") });
}