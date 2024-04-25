//Średnia wagi osób urodzonych w przedziale dat <01.01.1990, 31.12.2000>
printjson(db.people.aggregate([
    {
        $addFields: {
            convertedDate: {
                $dateFromString: {
                    dateString: "$birth_date",
                    format: "%Y-%m-%dT%H:%M:%SZ"
                }
            }
        }
    },
    {
        $match: {
            convertedDate: {
                $gte: new Date("1990-01-01T00:00:00Z"),
                $lte: new Date("2000-12-31T23:59:59Z")
            }
        }
    },
    {
        $group: {
            _id: null,
            average_weight: { $avg: "$weight" }
        }
    }
]));