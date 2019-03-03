import 'babel-polyfill';
import { makeCurrentDate } from 'utils/dataFormers';

export const UPDATE_TIME = 5; // update time in minutes

// dev server
// const API_URL = `http://localhost:3000/api`;

// prod server
const API_URL = `${window.location.origin}/api`;

export default class ApiService {

  constructor(serverUrl) {
    this.SERVER_URL = serverUrl ? serverUrl : API_URL;
  }

  getFullUrl(url) {
    return this.SERVER_URL + url;
  }

  async getRequest(url) {
    const fullUrl = this.getFullUrl(url);
    const res = await fetch(fullUrl);

    if (!res.ok) {
      throw new Error(`Could not get data from ${url}, recieve ${res.status}`)
    }

    const data = await res.json();
    return data;
  }

  async postRequest(url, data) {
    const fullUrl = this.getFullUrl(url);
    const res = await fetch(
      fullUrl,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }
    );

    if (!res.ok) {
      throw new Error(`Could not post data to ${url}, recieve ${res.status}`)
    }

    const resData = await res.json();
    return resData;
  }

  async patchRequest(url, data) {
    const fullUrl = this.getFullUrl(url);
    const res = await fetch(
      fullUrl,
      {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }
    );

    if (!res.ok) {
      throw new Error(`Could not patch data to ${url}, recieve ${res.status}`)
    }

    const resData = await res.json();
    return resData;
  }

  async deleteRequest(url) {
    const fullUrl = this.getFullUrl(url);
    const res = await fetch(
      fullUrl,
      {
        method: 'DELETE'
      }
    );

    if (!res.ok) {
      throw new Error(`Could not delete data to ${url}, recieve ${res.status}`)
    }

    const resData = await res.json();
    return resData;
  }

  async getAllTasks() {
    const res = await this.getRequest('/tasks');
    return res;
  }

  async getTaskById(id) {
    const res = await this.getRequest(`/tasks/${id}`);
    return res;
  }

  async loginByToken() {
    const token = this.getToken();
    const res = await this.getRequest('/users');
    return checkUser(res, {}, token);
  }

  async login(userData) {
    const res = await this.getRequest('/users');
    return checkUser(res, userData);
  }

  async saveTask(data) {
    const { id, ...task } = data;
    let res = null;
    if (id === 'new') {
      const saveData = {
        ...task,
        createdAt: makeCurrentDate()
      };
      res = await this.postRequest('/tasks', saveData);
    } else {
      res = await this.patchRequest(`/tasks/${id}`, data);
    }

    return res;
  }

  async deleteTask(id) {
    const res = await this.deleteRequest(`/tasks/${id}`);
    return res;
  }

  logout() {
    this.setToken(null);
  }

  getToken() {
    return window.localStorage.getItem('sessionToken');
  }

  setToken(token) {
    window.localStorage.setItem('sessionToken', token);
  }

}

function checkUser(users, userData, token) {
  const { login = '', password = '' } = userData;
  const match = users.find((el) => {
    if (token) {
      return el.sessionToken === token;
    }
    return el.username === login && el.password === password
  });

  return match ? match.sessionToken : null;
}
