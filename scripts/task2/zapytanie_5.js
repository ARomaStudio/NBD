//Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości
printjson(db.people.aggregate([
    {
        $project: {
            nationality: 1,
            BMI: {
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
        $group: {
            _id: "$nationality",
            averageBMI: { $avg: "$BMI" },
            minBMI: { $min: "$BMI" },
            maxBMI: { $max: "$BMI" }
        }
    }
]));