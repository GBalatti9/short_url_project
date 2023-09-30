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
                res.render('index', { url: { link: `${req.hostname}.${urlExists.short_url}` } }) }
            else {
                try {
                    const newShortId = id();                    
                    const newUrl = await Url.create({
                        url: longUrl,
                        short_url: newShortId,
                    })
                    // console.log(createUrl);
                    res.render('index', { url: { link: `${req.hostname}.${newUrl.short_url}` } });
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}