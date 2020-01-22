const database = require('../database/connection');

class CatNames {
  constructor(database) {
      this.database = database;
  }

  async getAll() {
    const catData = await this.getFromDB();
    const catNames = catData.cat_names;
    return catNames;
  }

  async create(cat) {
    const catData = await this.getFromDB();
    const catNames = new Set(catData.cat_names);
    catNames.add(cat);
    catData.cat_names = Array.from(catNames);
    await this.writeToDB(catData);
    return cat;
  }

  async delete(cat) {
    const catData = await this.getFromDB();
    catData.cat_names = catData.cat_names.filter(name => name !== cat);
    await this.writeToDB(catData);
    return cat;
  }

  async getFromDB() {
    return await this.database.connection().getJSON();
  }

  async writeToDB(data) {
    return await this.database.connection().writeJSON(data);
  }
}

module.exports = CatNames;
