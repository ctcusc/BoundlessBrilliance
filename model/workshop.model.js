module.exports = (sequelize, DataTypes, Model) => {

    class Workshop extends Model {}

    Workshop.init({
        // Model attributes are defined here
        workshop_id: {
          type: DataTypes.INTEGER
        },
        // Sprint 0: Wesley implementation
        workshop_name: {
          type: DataTypes.STRING
        },
        workshop_description: {
          type: DataTypes.STRING
        },
        workshop_date: {
          type: DataTypes.STRING
        },
        workshop_time: {
          type: DataTypes.STRING
        },
        workshop_duration: {
          type: DataTypes.STRING
        },
        workshop_chapter: {
          type: DataTypes.STRING
        },
        workshop_num_presentors: {
          type: DataTypes.INTEGER
        },
        workshop_is_virtual: {
          type: DataTypes.BOOLEAN
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'workshop' // We need to choose the model name
      });
      
      return Workshop;
}