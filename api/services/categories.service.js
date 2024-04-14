const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoriesService {
  async create(data) {
    const newCategory = await models.Categories.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Categories.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Categories.findByPk(id);
    if (!category) throw boom.notFound('category not found');
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const updateCategory = category.update(changes);
    return updateCategory;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoriesService;
