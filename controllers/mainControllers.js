const { Url } = require('../database/models');
const { id } = require('../plugins/get-shortid.plugin');
const { validationResult } = require('express-validator');

module.exports = {
    getIndex: (req, res) => {
        console.log(id());
        res.render('index', { url: {}, errors: {} });
    },

    postIndex: async (req, res) => {
        const { longUrl } = req.body;
        const result = validationResult(req).errors;
        console.log(result);
        if (result.length > 0) {
            const message = result.map(r => r.msg);
            return res.render('index', { url: {}, errors: { msg: [...message] } })

        } else {
            try {
                const urlExists = await Url.findOne({
                    where: {
                        url: longUrl
                    }
                });
                if (urlExists) {
                    res.render('index', { url: { link: `${urlExists.short_url}` }, errors: {} })
                }
                else {
                    try {
                        const newShortId = id();
                        const newUrl = await Url.create({
                            url: longUrl,
                            short_url: req.hostname + '.' + newShortId,
                        })
                        // console.log(createUrl);
                        res.render('index', { url: { link: `${newUrl.short_url}` }, errors: {} });
                    } catch (error) {
                        console.log(error);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },

    getUrlLink: async (req, res) => {
        const { urlIdUnique } = req.params;
        try {
            const findUrl = await Url.findOne({
                where: {
                    short_url: urlIdUnique
                }
            })
            if (!findUrl) {
                console.log('ESTOY ACA');
                return res.status(404).send('Page not found');
            } else {
                // console.log(findUrl);
                const url = findUrl.url
                res.redirect(`${url}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}