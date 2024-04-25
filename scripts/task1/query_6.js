//Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób
printjson(db.people.insertOne({
    birth_date: "2001-09-24T09:23:17Z",
    credit: [{"type": "visa-electron", "number": new NumberLong("3569927652321201"), "currency": "KZT", "balance": 6370.64}, {"type": "diners-club-carte-blanche", "number": new NumberLong("5396348883161081"), "currency": "RUB", "balance": 5482.54}, {"type": "jcb", "number": new NumberLong("3537222731021917"), "currency": "IDR", "balance": 6114.02}],
    description: "some description",
    email: "artem.romanenko@gmail.com",
    first_name: "Artem",
    height: new Double(185.5),
    last_name: "Romanenko",
    job: "Java Developer",
    birth_date: "1990-01-01T00:00:00Z",
    location: {
        city: "Wroclaw",
        address: {
            streetname: "Żwirki i Wigury",
            streetnumber: 51
        }
    },
    nationality: "Croatia",
    sex: "Male",
    weight: new Double(75.5),
}))