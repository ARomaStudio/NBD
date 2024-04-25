//Doda do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”
// i zwróci informacje o ilości zaktualizowanych dokumentów.
printjson(db.people.updateMany(
    { first_name: "Antonio" },
    { $set: { hobby: "pingpong" } }
));