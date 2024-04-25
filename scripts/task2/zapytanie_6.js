//Najpopularniejsze miejsce zamieszkania (miasto) wśród osób o najwyższym BMI (posortuj wynik malejąco)
printjson(db.people.aggregate([
    {
        $addFields: {
            bmi: {
                $divide: [
                    "$weight",
                    {
                        $pow: [
                            { $divide: ["$height", 100] },
                            2
                        ]
                    }
                ]
            }
        }
    },
    {
        $sort: { bmi: -1 }
    },
    {
        $group: {
            _id: "$location.city",
            count: { $sum: 1 }
        }
    },
    {
        $sort: { count: -1 }
    },
    {
        $limit: 1
    }
]));