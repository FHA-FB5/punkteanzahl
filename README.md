# Punkteanzahl
Application to display the score overview between two teams as a web gui. \
Used in the introduction seminar for the freshmen students.

## My additions
- Better Frontend for the admin Panel.
- Special Effects like confetti and sounds.
- Possibility to enable and disable the special effects.
- Persistent storage on server side for fewer data loss on website reload.

## Usage
- Open the `/` endpoint to view the current score. 
  - If no values are set or if the page is reloaded the values **Team A** with **0** points and **Team B** with **0** points will be shown.  
- Open the `/admin` endpoint to access the Adminpanel. 
  - The score and the names will be updated by a socket connection to the score page.

## Dependencies
- python3
- flask 
- socket.io

## Run
1. Install python3 and pip3
2. Install dependencies with `pip install -r requirements.txt`.
3. Start the server with `python3 main.py`.
4. Open `127.0.0.1:5000` in your browser to display the score.
5. Open `127.0.0.1:5000/admin` in your browser to manipulate the score and Team Names.

Alternatively you could use the docker image provided in this repository.
