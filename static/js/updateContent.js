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
    socket.on('update', function (data) {
        if(data.points_a > +$("#points_a").text()) {
            confettiTeamA(particleOptions);
        }

        if(data.points_b > +$("#points_b").text()) {
            confettiTeamB(particleOptions);
        }

        $('#name_a').html(data.name_a);
        $('#points_a').html(data.points_a);
        $('#name_b').html(data.name_b);
        $('#points_b').html(data.points_b);
    });
});