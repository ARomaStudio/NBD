//Usunie u wszystkich osób o zawodzie „Editor” własność „email” i zwróci informacje
// o ilości zaktualizowanych dokumentów.
printjson(db.people.updateMany(
    { job: "Editor" },
    { $unset: { email: "" } }
));



