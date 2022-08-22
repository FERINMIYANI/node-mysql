let database = require('../SqlConnection')

exports.createDataBase = function (req, res, next) {
    let databaseName = "studentResult";

    let createQuery = `CREATE DATABASE ${databaseName}`;

    // use the query to create a Database.
    database.query(createQuery, (err) => {
        if (err) throw err;

        console.log("Database Created Successfully !");

        let useQuery = `USE ${databaseName}`;


        database.query(useQuery, (error) => {
            if (error) throw error;

            console.log("Using Database");

            return res.send(
                `Created and Using ${databaseName} Database`
            );


        })
    });
}

exports.createTable = function (req, res, next) {
    var sql = "CREATE TABLE students (id int NOT NULL AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), physics INT(10), chemistry INT(10), maths INT(10), english INT(10), computer INT(10), total INT(10), grade VARCHAR(8), PRIMARY KEY (id))";
    database.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        };
        console.log("Table created");
    });
    return res.status(200).json({ message: 'Table Created' })
}

exports.insertData = async function (req, res, next) {
    let data = { ...req.body }
    data.total = parseInt(data.physics) + parseInt(data.chemistry) + parseInt(data.maths) + parseInt(data.english) + parseInt(data.computer)
    data.grade = null

    if (data.total >= 90) {
        data.grade = "A"
    }
    else if (data.total >= 80) {
        data.grade = "B"
    }
    else if (data.total >= 70) {
        data.grade = "C"
    }
    else if (data.total >= 60) {
        data.grade = "D"
    }
    else if (data.total >= 50) {
        data.grade = "E"
    }
    else {
        data.grade = "Fail"
    }


    let sql = `INSERT INTO students (fname, lname, physics, chemistry, maths, english, computer, total, grade) VALUES ('${data.fname}', '${data.lname}', '${data.physics}', '${data.chemistry}', '${data.maths}', '${data.english}', '${data.computer}', '${data.total}', '${data.grade}')`

    database.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        };
        console.log("Table created");
    });
    return res.status(200).json({ message: 'Data Added' })
}

exports.deleteData = async function(req, res){
    let id = req.query.id

}