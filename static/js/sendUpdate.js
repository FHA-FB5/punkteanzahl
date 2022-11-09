var socket = io();
let byId = (id) => { return document.getElementById(id) };


window.onload = init;

function init() {
    socket.emit('request');

    socket.on('request', function (data) {
        byId('name_a').value = data.name_a;
        byId('points_a').innerText = data.points_a;
        byId('name_b').value = data.name_b;
        byId('points_b').innerText = data.points_b;
        byId('play_sound').checked = data.play_sound;
        byId('play_confetti').checked = data.play_confetti;
    });

    byId('add_a').onclick = () => {
        byId("points_a").innerText = +byId("points_a").innerText + 1;
        sendUpdate();
    };

    byId('sub_a').onclick = () => {
        byId("points_a").innerText = +byId("points_a").innerText - 1;
        sendUpdate();   
    };

    byId('add_b').onclick = () => {
        byId("points_b").innerText = +byId("points_b").innerText + 1;
        sendUpdate();
    };

    byId('sub_b').onclick = () => {
        byId("points_b").innerText = +byId("points_b").innerText - 1;   
        sendUpdate();
    };

    byId('name_a').oninput = () => { sendUpdate() };
    byId('name_b').oninput = () => { sendUpdate() };
    byId('play_sound').onclick = () => { sendUpdate() };
    byId('play_confetti').onclick = () => { sendUpdate() };
}


function sendUpdate() {
    let name_a = byId('name_a').value;
    let points_a = byId('points_a').innerText;
    let name_b = byId('name_b').value;
    let points_b = byId('points_b').innerText;
    let play_sound = byId('play_sound').checked;
    let play_confetti = byId('play_confetti').checked;

    socket.emit('update', { name_a: name_a, points_a: points_a, name_b: name_b, points_b: points_b, play_sound: play_sound, play_confetti: play_confetti });
}