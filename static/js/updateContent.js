let confettiOptions = {
    resize: true,
    useWorker: false,
};

let particleOptions = {
    particleCount: 100,
    spread: 360,
    startVelocity: 30,
    gravity: 0.5
};


let socket = io();
let canvasTeamA = document.querySelector('.team_a > canvas');
let canvasTeamB = document.querySelector('.team_b > canvas');
let confettiTeamA = confetti.create(canvasTeamA, confettiOptions);
let confettiTeamB = confetti.create(canvasTeamB, confettiOptions);


$(document).ready(function () {
    socket.emit('request');

    socket.on('request', function (data) {
        $('#name_a').text(data.name_a);
        $('#points_a').text(data.points_a);
        $('#name_b').text(data.name_b);
        $('#points_b').text(data.points_b);
    });

    socket.on('update', function (data) {
        if(data.points_a > +$("#points_a").text()) {
            playEffects(data.play_sound, data.play_confetti, confettiTeamA);
        }

        if(data.points_b > +$("#points_b").text()) {
            playEffects(data.play_sound, data.play_confetti, confettiTeamB);
        }

        $('#name_a').text(data.name_a);
        $('#points_a').text(data.points_a);
        $('#name_b').text(data.name_b);
        $('#points_b').text(data.points_b);
    });
});

function playEffects(play_sound, play_confetti, confetti) {
    if(play_sound) {
        $('#audio').trigger("pause");
        $('#audio').prop("currentTime", 0);
        $('#audio').trigger("play");
    }

    if(play_confetti) {
        confetti(particleOptions);
    }
}