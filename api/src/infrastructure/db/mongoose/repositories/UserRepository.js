'use strict';

const { toEntity, toDatabase } = require('../../../../interfaces/mappers/UserMapper');
const UserModel = require('../schemas/User');
const UserRepository = require('../../../../interfaces/repositories/IUserRepository');

module.exports = class extends UserRepository {
  constructor() {
    super();
  }

  async persist(userEntity) {
    const { email, password } = userEntity;
    const mongooseUser = new UserModel({ email, password });
    await mongooseUser.save();
    return toEntity(mongooseUser);
  }

  async merge(userEntity) {
    const { id } = userEntity;
    const mongooseUser = await UserModel.findByIdAndUpdate(id, toDatabase(userEntity));
    return toEntity(mongooseUser);
  }

  async get(userId) {
    const mongooseUser = await UserModel.findById(userId);
    return toEntity(mongooseUser);
  }

  async getByEmail(userEmail) {
    const mongooseUser = await UserModel.find({ email: userEmail });
    return toEntity(mongooseUser[0]);
  }
};
