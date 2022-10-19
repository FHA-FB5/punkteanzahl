# Punkteanzahl
Application to provide the points overview as web gui for the first semester introduction seminar.

## Usage
Open the main page on `/` to view the current points. If no values are set or if the page is reloaded the values `Team A` with 0 points and `Team B` with 0 points will be shown.  
Open the admin page on `/admin` and enter the team names and points. Click the update button. The points will be updated by socket connection on the main page.

## Dependencies
This project is based on python3 with flask and socket.io.

## Run
1. Install python3 and pip3
2. Install dependencies with `pip install -r requirements.txt`
3. Start the server with `python3 main.py`
4. Open `127.0.0.1:5000` in your browser as user view
5. Open `127.0.0.1:5000/admin` in your browser as admin view

You could also use the docker image provided in this repository.