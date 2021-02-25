exports.getForm = (req,res,next) => {
    res.render('index.ejs', {
        pageTitle: 'FORM'
    })
}