'use strict';
const axios = require('axios');

const { toEntity } = require('../../../interfaces/mappers/CharacterMapper');
const CharacterRepository = require('../../../interfaces/repositories/ICharacterRepository');
const { CHARACTERS_API_PATH } = require('../../../../utils/constants');

module.exports = class extends CharacterRepository {
  constructor() {
    super();
  }

  async get(page) {
    try {
      const response = await axios.get(CHARACTERS_API_PATH);
      const {
        data: { results = [] },
      } = response;

      return results.map(toEntity);
    } catch (e) {
      console.log(e);
    }
  }

  async getById(characterId) {
    const response = await axios.get(`${CHARACTERS_API_PATH}/${characterId}`);
    const { data } = response;
    return toEntity(data);
  }
};
