class CategoriesService {
  constructor() {
    this.categories = [];
  }

  async create() {}

  async find() {
    return this.categories;
  }

  async findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  async update() {}

  async delete() {}
}

module.exports = CategoriesService;
