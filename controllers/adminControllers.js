const { User } = require('../database/models');
const { hashPassword, comparePassword } = require('../plugins/index');

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

            const hashedPassword = hashPassword(registerPassword);
            if(!comparePassword(registerPasswordCheck, hashedPassword)){
                return res.redirect('/admin?error=Las contraseñas no coinciden')
            }

            const [user, created] = await User.findOrCreate({
                where: {
                    email: registerEmail
                },
                defaults: {
                    email: registerEmail,
                    password: hashedPassword,
                    check_password: registerPasswordCheck,
                    category: registerCategory,
                }
            })
            if(!created) return res.render('adminView');
            res.redirect('/admin');
        } catch (error) {
            console.log(error);
        }
    },

    deleteUser: (req, res) => {
        const { id } = req.params.id;

    }
}