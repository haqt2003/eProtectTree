
import pyrebase
import time
import random

config_sto = {
    "apiKey": "AIzaSyA4yiTkCSj1XY1ISjbTmX-X9jaDcoyTzdY",
    "authDomain": "eprotecttree-8a002.firebaseapp.com",
    "databaseURL": "https://eprotecttree-8a002-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "eprotecttree-8a002",
    "storageBucket": "eprotecttree-8a002.appspot.com",
    "messagingSenderId": "493967977430",
    "appId": "1:493967977430:web:7e5881c636bacc5bdb9277",
    "measurementId": "G-JVZ5HHYYPM"
}

firebase = pyrebase.initialize_app(config_sto)

db = firebase.database()
timeStamp=str(int(time.time()))
dataHumidity = {
    'timeStamp': timeStamp, 
    'value':  random.randint(20, 90),
    'note':''
}
dataCo2 = {
    'timeStamp':  timeStamp,
    'value':  random.randint(20, 90),
    'note':''
}
dataLight = {
    'timeStamp':  timeStamp,
    'value':  random.randint(20, 800),
    'note':''
}
dataTemp = {
    'timeStamp':  timeStamp,
    'value':  random.randint(-10, 60),
    'note':''
}
dataPh = {
    'timeStamp':  timeStamp,
    'value':  round(random.uniform(00.0, 9.0), 2),
    'note':''
}
dataPressure = {
    'timeStamp':  timeStamp,
    'value':   random.randint(100, 860),
    'note':''
}
# Push data to Firebase
db.child("Sensor").child("humidity").push(dataHumidity)
db.child("Sensor").child("carbondioxitLevel").push(dataCo2)
db.child("Sensor").child("lightIntensity").push(dataCo2)
db.child("Sensor").child("phLevel").push(dataPh)
db.child("Sensor").child("temperature").push(dataTemp)
db.child("Sensor").child("osmoticPressure").push(dataPressure)