from flask import Flask, render_template, url_for, redirect, session, flash, request, json, jsonify
from flask_mysqldb import MySQL
from passlib.hash import sha256_crypt
from flask_cors import CORS, cross_origin
import datetime as datetime
from dateutil.parser import parse
import moment
import pymongo
cli = pymongo.MongoClient('mongodb://localhost:27017/hoteldb')
db = cli['hoteldata']

app = Flask(__name__)
app.secret_key = "development"
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/book/<roomtype>', methods=['POST', 'GET'])
def book(roomtype):

    error = None
    if request.method == 'POST':
        if not request.form['email']:
            error = "email is empty"
        else:
            flash("success")
            return redirect(url_for('index'))
    return render_template('booknow.html', error=error)


@app.route("/api/availablerooms", methods=['POST'])
@cross_origin()
def getAvailableRoomsData():
    bookedCollection = db["booked"]
    roomsCollection = db["rooms"]
    requestData = request.get_json()
    print(requestData)

    startDate = parse(requestData["startDate"])
    print("startDate", startDate)
    endDate = parse(requestData["endDate"])
    print("endDate", endDate)
    try:

        # get room numbers from booked collection
        bookedRoomsData = bookedCollection.find({
            "checkin": {
                "$lt": endDate
            },
            "checkout": {
                "$gte": startDate
            }
        }, {
            "_id": 0,
            "roomnumber": 1
        }).distinct("roomnumber")

        bookedRoomsList = list(bookedRoomsData)

        # get roooms data excluding bookedroomslist
        availableData = roomsCollection.find({"roomnumber": {"$nin": bookedRoomsList}}, {
            "_id": 0,
            "roomnumber": 1,
            "accommodation": 1
        })

        # for roomsData in availableData:
        #     print(roomsData["roomnumber"])

        availableRoomsData = {
            "availableRoomsData": list(availableData),
            "errorMessage": None
        }

        print(availableRoomsData)

        # send response
        return json.dumps(availableRoomsData), 200
    except pymongo.errors.ConnectionFailure as e:
        print(e)


if __name__ == '__main__':
    app.run(debug=True)
