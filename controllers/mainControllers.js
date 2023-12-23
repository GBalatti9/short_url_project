const { Url } = require('../database/models');
const { id } = require('../plugins/index');
const { validationResult } = require('../plugins/index');

module.exports = {
    getIndex: (req, res) => {
        console.log(id());
        res.render('index', { url: {}, errors: {} });
    },

    postIndex: async (req, res) => {
        const { longUrl } = req.body;
        const result = validationResult(req).errors;
        console.log("VALIDATION RESULT", result);
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
                    res.render('index', { url: { link: `${urlExists.short_url}`, linkName: 'shorterUrl' }, errors: {} })
                }
                else {
                    try {
                        const newShortId = id();
                        const newUrl = await Url.create({
                            url: longUrl,
                            short_url: newShortId,
                        })
                        res.render('index', { url: { link: `${newUrl.short_url}`, linkName: 'shorterUrl' },  errors: {} });
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
        console.log({ urlIdUnique });
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