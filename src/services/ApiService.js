import 'babel-polyfill';

export default class ApiService {

  constructor(serverUrl) {
    this.SERVER_URL = serverUrl ? serverUrl : 'http://localhost:8080/data'
  }

  getFullUrl(url) {
    return this.SERVER_URL + url;
  }

  async getRequest(url) {
    const fullUrl = this.getFullUrl(url);
    const res = await fetch(fullUrl);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieve ${res.status}`)
    }

    const data = await res.json();
    return data;
  }

  async getAllTasks() {
    const res = await this.getRequest('/tasks.json');
    return makeTaskList(res.tasks);
  }

  async getTaskById(id) {
    const res = await this.getRequest(`/tasks/${id}.json`);
    return res;
  }

  async loginByToken() {
    const token = this.getToken();
    const res = await this.getRequest('/users.json');
    return checkUser(makeListFromData(res.users), {}, token);
  }

  async login(userData) {
    const res = await this.getRequest('/users.json');
    return checkUser(makeListFromData(res.users), userData);
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
//
function makeTaskList(data) {
  return Object.keys(data).map((id) => data[id]);
}

function makeListFromData(data) {
  return Object.keys(data)
    .map((id) => data[id])
    .sort((a, b) => a.id >= b.id ? 1 : -1)
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
