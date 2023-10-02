module.exports = {
    getAdmin: (req, res) => {
        res.render('loginAdmin')
    },

    postAdmin: (req, res) => {
        console.log(req.body);
        res.redirect('/');
    },

    getDashboard: (req, res) => {
        res.render('adminView');
    }
}