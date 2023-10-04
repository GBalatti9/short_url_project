module.exports = {
    getLogin: (req, res) => {
        res.render('loginUser', {errors: {}})
    },

    postLogin: (req, res) => {
        res.redirect('/');
    }
}