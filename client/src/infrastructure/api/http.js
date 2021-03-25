import axios from 'axios';

const wrappedAxios = axios.create({
  withCredentials: true,
  responseType: 'json',
});

const get = (path, params) => {
  return new Promise((resolve, reject) => {
    return wrappedAxios
      .get(path, { params })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        const { response = {} } = error || {};
        const { data } = response;
        reject(data);
      });
  });
};

const patch = (path, payload) => {
  return new Promise((resolve, reject) => {
    wrappedAxios(path, {
      method: 'patch',
      responseType: 'json',
      data: payload,
    })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        const { response = {} } = error || {};
        const { data } = response;
        reject(data);
      });
  });
};

const post = (path, payload) => {
  return new Promise((resolve, reject) => {
    wrappedAxios(path, {
      method: 'post',
      responseType: 'json',
      data: payload,
    })
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error) => {
        const { response = {} } = error || {};
        const { data } = response;
        reject(data);
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
        const { response = {} } = error || {};
        const { data } = response;
        reject(data);
      });
  });
};

export { get, patch, post, remove };
