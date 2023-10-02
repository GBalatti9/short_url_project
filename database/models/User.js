module.exports = (sequelize, dataTypes) => {

    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        check_password: {
            type: dataTypes.STRING,
        },
        category: {
            type: dataTypes.INTEGER
        },
    }

    let config = {
        tableName: 'users',
        timestamps: false,
        createdAt: false,
        deletedAt: false,
    }

    const User = sequelize.define(alias, cols, config);
    return User;
}