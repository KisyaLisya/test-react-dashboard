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

}
//
function makeTaskList(data) {
  return Object.keys(data).map((id) => data[id]);
}
