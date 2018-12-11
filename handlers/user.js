const fetch = require('node-fetch');
class UserHandler {
  static async register(request, response, sequelize) {
    const { user } = request.body;
    const insertIntoUser = `INSERT INTO users (name, lastname, role, age) VALUES (?,?,?,?) RETURNING *`;
    const valuesToInsert = [user.name, user.lastname, user.role, user.age];
    try {
      const queryExec = await sequelize.query(insertIntoUser, {
        replacements: valuesToInsert
      });
      return response.status(200).send({ resultQuery: queryExec });
    } catch (e) {
      console.log('E:::', e);
      return response.status(500).send(false);
    }
  }

  static async registerAdmin(request, response, sequelize) {
    const { user } = request.body;
    try {
      const res = await fetch('http://localhost:3000/service/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const toJson = await res.json();
      console.log('toJson', toJson);
      return response.send({ admin: toJson });
    } catch (e) {
      console.log('E:::', e);
      return response.send(500).send(false);
    }
  }
}

module.exports = UserHandler;
