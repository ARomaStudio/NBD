//Zwracanie jednej kobiety narodowości chińskiej
printjson(db.people.findOne({ sex: "Female", nationality: "China" }))