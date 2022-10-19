from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
#app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index(**data):
    return render_template('index.html', **data)

@app.route('/admin')
def admin(**data):
    return render_template('admin.html', **data)

@socketio.on('update')
def handle_points_update(data):
    print('received points update: ' + str(data))
    socketio.emit('update', data, broadcast=True)

@socketio.on('client_connected')
def handle_client_connected(data):
    print('client_connected: ' + str(data))

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', debug=False)