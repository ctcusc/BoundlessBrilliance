module.exports = (sequelize, DataTypes, Model) => {

    class UserStatus extends Model {}

    UserStatus.init({
        // Model attributes are defined here
        user_id: {
          type: DataTypes.INTEGER
        },
        user_status: {
          type: DataTypes.INTEGER
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user_status' // We need to choose the model name
      });
      
      return UserStatus;
}