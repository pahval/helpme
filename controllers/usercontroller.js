const Users = require('../models/usermodels');
exports.postForm = (req,res,next) => {
    const username = req.body.username;
    const email = req.body.email;
// hash converter
    function stringToHash(string) { 
        var hash = 0; 
        if (string.length == 0) return hash; 
        for (i = 0; i < string.length; i++) { 
            char = string.charCodeAt(i); 
            hash = ((hash << 5) - hash) + char; 
            hash = hash & hash; 
        }
        return hash; 
    } 
    const password = stringToHash(req.body.password);
    const password2 =stringToHash(req.body.password2);
    console.log("user controller");
    console.log(username , email , password , password2);
    const users = new Users(username , email , password , password2);
    users.save().then( () => {
        res.redirect('/');
    }).catch(err => console.log(err))
}