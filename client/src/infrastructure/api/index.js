import axios from 'axios';

const wrappedAxios = axios.create({
  withCredentials: true,
});

const get = (path) => {
  return new Promise((resolve, reject) => {
    wrappedAxios(path, {
      method: 'get',
      responseType: 'json',
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
        reject(error);
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
