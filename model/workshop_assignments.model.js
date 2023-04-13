module.exports = (sequelize, DataTypes, Model) => {

    class WorkshopAssignments extends Model {}

    WorkshopAssignments.init({
        // Model attributes are defined here
        user_id: {
          type: DataTypes.INTEGER
        },
        workshop_id: {
          type: DataTypes.INTEGER
        },
        has_accepted: {
          type: DataTypes.BOOLEAN
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'workshop_assignments' // We need to choose the model name
      });
      
      return WorkshopAssignments;
}