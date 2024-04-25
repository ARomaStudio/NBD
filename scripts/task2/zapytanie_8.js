//Suma kwot na kartach kredytowych dla osób, których nazwisko zaczyna
// się na literę „R”. (podpowiedź – użyj $regex)
printjson(db.people.aggregate([
    {
        $match: {
            last_name: { $regex: /^R/, $options: 'i' }
        }
    },
    {
        $unwind: "$credit"
    },
    {
        $group: {
            _id: null,
            totalCredit: { $sum: "$credit.balance" }
        }
    }
]));