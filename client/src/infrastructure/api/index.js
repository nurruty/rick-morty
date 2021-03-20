import axios from 'axios';

const wrappedAxios = Object.assign({}, axios);
wrappedAxios.defaults.withCredentials = true;

const get = (path) => {
  return new Promise((resolve, reject) => {
    wrappedAxios(path, {
      method: 'get',
      responseType: 'json',
      withCredentials: true,
    })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const patch = (path, payload) => {
  return new Promise((resolve, reject) => {
    wrappedAxios
      .patch(path, payload, {
        responseType: 'json',
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const post = (path, payload) => {
  return new Promise((resolve, reject) => {
    wrappedAxios
      .post(path, payload, {
        responseType: 'json',
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const remove = (path) => {
  return new Promise((resolve, reject) => {
    wrappedAxios
      .delete(path, {
        responseType: 'json',
        withCredentials: true,
      })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { get, patch, post, remove };
