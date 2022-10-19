FROM python:buster

SHELL ["/bin/bash", "-c"]
WORKDIR /opt/app

COPY . .

RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python3", "main.py"]