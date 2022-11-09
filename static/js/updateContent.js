let byId = (id) => { return document.getElementById(id) };

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

window.onload = init;

function init() {
    socket.emit('request');

    socket.on('request', function (data) {
        byId('name_a').innerText = data.name_a;
        byId('points_a').innerText = data.points_a;
        byId('name_b').innerText = data.name_b;
        byId('points_b').innerText = data.points_b;
    });

    socket.on('update', function (data) {
        if(data.points_a > +byId("points_a").innerText) {
            playEffects(data.play_sound, data.play_confetti, confettiTeamA);
        }

        if(data.points_b > +byId("points_b").innerText) {
            playEffects(data.play_sound, data.play_confetti, confettiTeamB);
        }

        byId('name_a').innerText = data.name_a;
        byId('points_a').innerText = data.points_a;
        byId('name_b').innerText = data.name_b;
        byId('points_b').innerText = data.points_b;
    });
};

function playEffects(play_sound, play_confetti, confetti) {
    if(play_sound) {
        byId('audio').pause();
        byId('audio').currentTime = 0;
        byId('audio').play();
    }

    if(play_confetti) {
        confetti(particleOptions);
    }
}