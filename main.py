from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
#app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

storage = {'name_a': 'Team A', 'points_a': '0', 'name_b': 'Team B', 'points_b': '0'}

@app.route('/')
def index(**data):
    return render_template('view.html', **data)

@app.route('/admin')
def admin(**data):
    return render_template('admin.html', **data)

@socketio.on('update')
def handle_points_update(data):
    global storage
    print('Send out update: ' + str(data))
    storage = data
    socketio.emit('update', storage, broadcast=True)

@socketio.on('request')
def request_startup_update():
    print('Request update. Storage: ' + str(storage))
    socketio.emit('request', storage, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', debug=False, allow_unsafe_werkzeug=True)