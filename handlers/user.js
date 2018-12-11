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
}

module.exports = UserHandler;
