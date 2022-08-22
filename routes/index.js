var express = require('express');
var router = express.Router();
let Connectioncontroller = require('../Controller/ConnectionController')


/* GET home page. */
router.get('/createdatabase', Connectioncontroller.createDataBase);

router.get('/createtable', Connectioncontroller.createTable)

router.post('/insertdata', Connectioncontroller.insertData)

router.get('/deletedata', Connectioncontroller.deleteData)



module.exports = router;
