//Usunie z bazy osoby o wzroście przekraczającym 190 cm
//i zwróci informacje o ilości usuniętych dokumentów.
printjson(db.people.deleteMany({
    height: { $gt: Double(190) }
}));