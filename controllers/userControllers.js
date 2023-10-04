const { User } = require('../database/models');
const { comparePassword } = require('../plugins/index');
const { validationResult } = require('../plugins/index');

module.exports = {
    getLogin: (req, res) => {
        res.render('loginUser', {errors: {}, oldData: {}})
    },

    postLogin: async (req, res) => {
        const { loginEmail, loginPassword } = req.body;

        const result = validationResult(req).errors;
        if(result.length > 0){
            const message = result.map(r => r.msg)
            return res.render( 'loginUser', {errors: { msg: [...message] } } )
        }

        try {
            const findEmail = await User.findOne({ 
                where: {
                    email: loginEmail
                }
            });
            if(!findEmail){
                return res.render( 'loginUser', { errors: {msg: ['Usuario incorrecto']}  } );
            } else {
                if(!comparePassword(loginPassword, findEmail.password)){
                    return res.render( 'loginUser', { errors: {msg: ['Contraseña incorrecta']} } );
                } else {
                    return res.redirect('/');
                }
            }
        } catch (error) {
            console.log(error);
        }

        res.redirect('/');
    }
}