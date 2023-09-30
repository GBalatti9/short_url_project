module.exports = (sequelize, dataTypes) => {

    let alias = 'Url';

    let cols = {
        id: {
            type: dataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        }, 
        url: {
            type: dataTypes.STRING,
        }, 
        short_url: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'url',
        createdAt: false,
        updatedAt: false,
    }

    const Url = sequelize.define(alias, cols, config);
    return Url;
}