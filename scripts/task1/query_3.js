//Zwracanie listy mężczyzn narodowości niemieckiej
printjson(db.people.find({ sex: "Male", nationality: "Germany" }).toArray())