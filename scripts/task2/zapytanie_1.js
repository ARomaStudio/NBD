//Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet
printjson(db.people.aggregate([
    {
        $group: {
            _id: "$sex",
            averageWeight: { $avg: "$weight" },
            averageHeight: { $avg: "$height" }
        }
    }
]));