const shortid = require('shortid');

const id = () => {
    return shortid();
}

module.exports = {
    id
}