//Zwracanie listy osób znajdujących się w bazie o wadze z przedziału
printjson(db.people.find({ weight: { $gte: 68, $lte: 71.5 } }).toArray())