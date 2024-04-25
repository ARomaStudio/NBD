//Zwracanie jednej osoby znajdującej się w bazie
db.getSiblingDB("nbd").getCollection("people").findOne({})

//Zwracanie jednej kobiety narodowości chińskiej
db.getSiblingDB("nbd").getCollection("people").findOne({ sex: "Female", nationality: "China" })

//Zwracanie listy mężczyzn narodowości niemieckiej
db.getSiblingDB("nbd").getCollection("people").find({ sex: "Male", nationality: "Germany" })

//Zwracanie listy osób znajdujących się w bazie o wadze z przedziału
db.getSiblingDB("nbd").getCollection("people").find({ weight: { $gte: 68, $lte: 71.5 } })

//Zwracanie listy imion i nazwisk wszystkich osób znajdujących się w bazie oraz miast,
// w których mieszkają, ale tylko dla osób urodzonych w XXI wieku
db.getSiblingDB("nbd").getCollection("people").aggregate([
    {
        $project: {
            first_name: 1,
            last_name: 1,
            // Conditionally include 'city' based on 'birth_date'
            city: {
                $cond: {
                    if: {
                        $and: [
                            { $gte: ["$birth_date", "2001-01-01T00:00:00Z"] },
                            { $lt: ["$birth_date", "2101-01-01T00:00:00Z"] }
                        ]
                    },
                    then: "$location.city", // Include 'city' for matching documents
                    else: "$$REMOVE" // Use $$REMOVE to exclude the field
                }
            },
            _id: 0
        }
    }
])

//Dodaj siebie do bazy, zgodnie z formatem danych użytych dla innych osób
db.getSiblingDB("nbd").getCollection("people").insertOne({
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
})

//Usunie z bazy osoby o wzroście przekraczającym 190 cm
//i zwróci informacje o ilości usuniętych dokumentów.
let result = db.getSiblingDB("nbd").getCollection("people").deleteMany({
    height: { $gt: Double(190) }
});
print("Usunięto dokumentów: ", result.deletedCount);

//Zastąpi nazwę miasta „Moscow” na „Moskwa” u wszystkich osób w bazie i zwróci
// do konsoli informacje ile dokumentów zostało zaktualizowanych.
let result = db.getSiblingDB("nbd").getCollection("people").updateMany(
    { "location.city": "Moscow" }, // Kryterium wyboru dokumentów do zaktualizowania
    { $set: { "location.city": "Moskwa" } } // Operacja aktualizacji
);
print("Zaktualizowano dokumentów: ", result.modifiedCount);

//Doda do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”
// i zwróci informacje o ilości zaktualizowanych dokumentów.
let result = db.getSiblingDB("nbd").getCollection("people").updateMany(
    { first_name: "Antonio" }, // Kryterium wyboru dokumentów do zaktualizowania
    { $set: { hobby: "pingpong" } } // Dodanie właściwości 'hobby'
);

print("Zaktualizowano dokumentów: ", result.modifiedCount);

//Usunie u wszystkich osób o zawodzie „Editor” własność „email” i zwróci informacje
// o ilości zaktualizowanych dokumentów.
let result = db.getSiblingDB("nbd").getCollection("people").updateMany(
    { profession: "Editor" }, // Kryterium wyboru dokumentów do zaktualizowania
    { $unset: { email: "" } } // Usunięcie właściwości 'email'
);
print("Zaktualizowano dokumentów: ", result.modifiedCount);