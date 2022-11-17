module.exports = (sequelize, DataTypes, Model) => {

    class User extends Model {}

    User.init({
        // Model attributes are defined here
        firstname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        // Sprint 0: Wesley implementation


        
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user' // We need to choose the model name
      });
      
      return User;
}