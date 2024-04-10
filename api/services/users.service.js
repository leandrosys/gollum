const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class UsersService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const users = await this.pool.query(query);
    return users.rows;
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
