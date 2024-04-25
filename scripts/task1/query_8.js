//Zastąpi nazwę miasta „Moscow” na „Moskwa” u wszystkich osób w bazie i zwróci
// do konsoli informacje ile dokumentów zostało zaktualizowanych.
printjson(db.people.updateMany(
    { "location.city": "Moscow" },
    { $set: { "location.city": "Moskwa" } }
));