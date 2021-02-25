const mysql = require('mysql2')
const pool = mysql.createPool({
    host :"localhost",
    user :"root",
    database:"formdata",
    password:"abhay"
})

module.exports = pool.promise()