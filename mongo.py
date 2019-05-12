import pymongo
import datetime as datetime

cli = pymongo.MongoClient('mongodb://localhost:27017/hoteldb')
db = cli['test']
data = [
    {
        "roomno": "p01",
        "roomname": "p01",
        "stay": 4
    },
    {
        "roomno": "p02",
        "roomname": "p02",
        "stay": 6
    },
    {
        "roomno": "p03",
        "roomname": "p03",
        "stay": 4
    },
    {
        "roomno": "p04",
        "roomname": "p04",
        "stay": 6
    }
]

collection = db["roomstest"]
# print(db.list_collection_names())
# for ele in data:
#     collection.insert_one(ele)

cursor = collection.find({"roomno": {"$nin": ["p02", "p03"]}})
# for ele in cursor:
#     for i in ele.keys():
#         if i != "_id":
#             print(i)
print(cursor.count())
for ele in cursor:
    print(ele)

# collection.insert_one({
#     "date": datetime.datetime.now()
# })
