const { User } = require('../database/models');

module.exports = {
    getAdmin: (req, res) => {
        res.render('loginAdmin')
    },

    postAdmin: (req, res) => {
        console.log(req.body);
        res.redirect('/');
    },

    getDashboard: async (req, res) => {
        try {
            const allUsers = await User.findAll({
                attributes: ['id', 'email', 'category']
            })
            res.render('adminView', {users: allUsers});
        } catch (error) {
            console.log(error);
        }
    },

    postUser: async (req, res) => {
        const { registerEmail, registerPassword, registerPasswordCheck, registerCategory } = req.body;
        console.log({registerEmail, registerPassword, registerPasswordCheck, registerCategory});
        try {
            const [user, created] = await User.findOrCreate({
                where: {
                    email: registerEmail
                },
                defaults: {
                    email: registerEmail,
                    password: registerPassword,
                    check_password: registerPasswordCheck,
                    category: registerCategory,
                }
            })
            res.redirect('/admin');
        } catch (error) {
            console.log(error);
        }
    }
}