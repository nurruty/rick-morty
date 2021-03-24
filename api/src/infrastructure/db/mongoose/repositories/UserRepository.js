'use strict';

const { toEntity, toDatabase } = require('../../../../interfaces/mappers/UserMapper');
const UserModelSchema = require('../schemas/User');
const UserRepository = require('../../../../interfaces/repositories/IUserRepository');

module.exports = class extends UserRepository {
  constructor({ db }) {
    super();

    this.UserModelSchema = UserModelSchema(db);
    this.UserModel = db.model('User', this.UserModelSchema);
  }

  async persist(userEntity) {
    const { email, password } = userEntity;
    const dbUser = new this.UserModel({ email, password });
    await dbUser.save();
    return toEntity(dbUser);
  }

  async merge(userEntity) {
    const { id } = userEntity;
    const dbUser = await this.UserModel.findByIdAndUpdate(id, toDatabase(userEntity));
    return toEntity(dbUser);
  }

  async get(userId) {
    const dbUser = await this.UserModel.findById(userId);
    return toEntity(dbUser);
  }

  async getByEmail(userEmail) {
    const dbUser = await this.UserModel.find({ email: userEmail });
    return toEntity(dbUser[0]);
  }
};
