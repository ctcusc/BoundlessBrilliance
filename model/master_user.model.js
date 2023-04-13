module.exports = (sequelize, DataTypes, Model) => {

    class MasterUser extends Model {}

    MasterUser.init({
        // Model attributes are defined here
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user_firstname: {
          type: DataTypes.STRING
        },
        // Sprint 0: Wesley implementation
        user_lastname: {
          type: DataTypes.STRING
        },
        user_ethnicity: {
          type: DataTypes.STRING
        },
        user_phone_number: {
          type: DataTypes.STRING
        },
        user_email: {
          type: DataTypes.STRING
        },
        user_password: {
          type: DataTypes.STRING
        },
        user_type: {
          integer: DataTypes.INTEGER
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'master_user' // We need to choose the model name
      });
      
      return MasterUser;
}