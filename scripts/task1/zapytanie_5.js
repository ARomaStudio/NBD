//Zwracanie listy imion i nazwisk i miast wszystkich osób znajdujących ale tylko dla osób urodzonych w XXI wieku !!!!!!
printjson(db.people.find(
    {
        birth_date: {
            $gte: "2001-01-01T00:00:00Z",
            $lt: "2101-01-01T00:00:00Z"
        }
    },
    {
        _id: 0,
        first_name: 1,
        last_name: 1,
        "location.city": 1
    }
).toArray())
