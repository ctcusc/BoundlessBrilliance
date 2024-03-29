const { Sequelize, Model, DataTypes } = require("sequelize");
const pg = require('pg');

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.master_user = require("../model/master_user.model")(sequelize, DataTypes, Model);
    db.workshop = require("../model/workshop.model")(sequelize, DataTypes, Model);
    db.user_status = require("../model/user_status.model")(sequelize, DataTypes, Model);
    db.workshop_assignments = require("../model/workshop_assignments.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}