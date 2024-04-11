const pool = require('../libs/postgres.pool');
const sequelize = require('../libs/sequelize');

class UsersService {
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete() {}
}

module.exports = UsersService;
