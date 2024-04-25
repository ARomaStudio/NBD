//Średni wiek osób w bazie z podziałem na zawody (posortuj wynik rosnąco względem wieku)
printjson(db.people.aggregate([
    {
        $addFields: {
            "convertedBirthDate": { $toDate: "$birth_date" }
        }
    },
    {
        $addFields: {
            "age": {
                $divide: [
                    { $subtract: [new Date(), "$convertedBirthDate"] },
                    (365 * 24 * 60 * 60 * 1000)
                ]
            }
        }
    },
    {
        $group: {
            _id: "$job",
            averageAge: { $avg: "$age" }
        }
    },
    {
        $sort: { averageAge: 1 }
    }
]));