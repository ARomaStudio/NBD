//Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty
printjson(db.people.aggregate([
    {
        $match: {
            sex: "Female",
            nationality: "Poland"
        }
    },
    {
        $unwind: "$credit"
    },
    {
        $group: {
            _id: "$credit.currency",
            totalAmount: { $sum: "$credit.balance" },
            averageAmount: { $avg: "$credit.balance" }
        }
    },
    {
        $project: {
            _id: 0,
            currency: "$_id",
            totalAmount: 1,
            averageAmount: 1
        }
    }
]));