//Top 3 najczęściej występujące daty urodzenia.
printjson(db.people.aggregate([
    {
        $group: {
            _id: "$birth_date",
            count: { $sum: 1 }
        }
    },
    {
        $sort: { count: -1 }
    },
    {
        $limit: 3
    },
    {
        $project: {
            _id: 0,
            birthDate: "$_id"
        }
    }
]));