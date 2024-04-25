//Listę pokazującą wszystkie zawody w bazie
// (lista ma wyodrębnić każdy zawód znajdujący się w bazie i pokazać go w outpucie tylko raz)
printjson(db.people.aggregate([
    {
        $group: {
            _id: "$job"
        }
    },
    {
        $project: {
            _id: 0,
            job: "$_id"
        }
    }
]));