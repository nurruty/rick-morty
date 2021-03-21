'use strict';

const User = require('../../../../interfaces/mappers/User');
const UserSchema = require('../db/mongoose/schemas/User');
const UserRepository = require('../../../../interfaces/repositories/IUserRepository');

module.exports = class extends UserRepository {
  constructor() {
    super();
  }

  async persist(userEntity) {
    const { email, password } = userEntity;
    const mongooseUser = new UserSchema({ email, password });
    await mongooseUser.save();
    return new User(mongooseUser.id, mongooseUser.email, mongooseUser.password);
  }

  async get(userId) {
    const mongooseUser = await UserSchema.findById(userId);
    return new User(mongooseUser.id, mongooseUser.email, mongooseUser.password);
  }

  async getByEmail(userEmail) {
    const mongooseUser = await UserSchema.find({ email: userEmail });
    return new User(mongooseUser.id, mongooseUser.email, mongooseUser.password);
  }
};
