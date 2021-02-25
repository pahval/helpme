const db = require('../util/database')
module.exports = class Users{
    constructor(username , email ,password ,password2){
        this.username =username 
        this.email =email 
        this.password =password 
        this.password2 = password2
    }
    save(){
        return db.execute('INSERT INTO userdata (username, email, password,         password2) VALUES (?, ?, ?, ?)',[this.username , this.email , this.password, this.password2])
    }
}