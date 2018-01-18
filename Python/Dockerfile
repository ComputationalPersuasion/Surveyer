FROM python:alpine3.6

WORKDIR /home/flask
COPY requirements.txt .
RUN pip install -r requirements.txt

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]