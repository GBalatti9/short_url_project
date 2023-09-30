const { Url } = require('../database/models');
const { id } = require('../plugins/get-shortid.plugin');

module.exports = {
    getIndex: (req, res) => {
        console.log(id());
        res.render('index', { url: {} });
    },

    postIndex: async (req, res) => {
        const { longUrl } = req.body;
        try {
            const urlExists = await Url.findOne({
                where: {
                    url: longUrl
                }
            });
            if (urlExists) { 
                res.render('index', { url: { link: `${urlExists.short_url}` } }) }
            else {
                try {
                    const newShortId = id();                    
                    const newUrl = await Url.create({
                        url: longUrl.includes('https://') ? longUrl : `https://${longUrl}`,
                        short_url: req.hostname + newShortId,
                    })
                    // console.log(createUrl);
                    res.render('index', { url: { link: `${newUrl.short_url}` } });
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
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
            if(!findUrl) { 
                return res.status(404).send('Page not found');
            } else {
                console.log(findUrl);
                const url = findUrl.url
                res.redirect(`${url}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}