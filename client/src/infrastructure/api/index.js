import axios from 'axios';

const handleSuccess = (response) => response;

const handleError = (error) => {
  switch (error.response.status) {
    case 401:
      this.redirectTo(document, '/');
      break;
    case 404:
      this.redirectTo(document, '/404');
      break;
    default:
      this.redirectTo(document, '/500');
      break;
  }
  return Promise.reject(error);
};

const redirectTo = (document, path) => {
  document.location = path;
};

const get = (path) => {
  return axios.get(path, {
    responseType: 'json',
  });
};

const patch = (path, payload) => {
  return axios.patch(path, payload, {
    responseType: 'json',
  });
};

const post = (path, payload) => {
  return axios.post(path, payload, {
    responseType: 'json',
  });
};

const remove = (path, payload) => {
  return axios.delete(path, payload, {
    responseType: 'json',
  });
};

export { get, patch, post, remove };
