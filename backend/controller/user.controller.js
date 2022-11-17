const { connect } = require('../db/db.config');


class userController {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async createUser(user) {
        // Sprint 0: Wonjun
    
    }

    async validateUser(user) {
        // Sprint 0: Evans
    }

    async approveUser(user) {
        // Sprint 0: Fred
    }


}

module.exports = new userController();