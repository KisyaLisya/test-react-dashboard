
const ANSI_RESET = "\x1b[0m";
const ANSI_GRAY = "\x1b[1;30m";
const ANSI_RED = "\x1b[1;31m";
const ANSI_GREEN = "\x1b[1;32m";
const ANSI_YELLOW = "\x1b[1;33m";
const ANSI_BLUE = "\x1b[1;34m";
const ANSI_CYAN = "\x1b[1;36m";

module.exports = class Logger {

  constructor(name) {
    this.name = name;
  }

  getName(type) {
    let color = '';

    switch(type) {
      case 'log':
        color = ANSI_YELLOW;
      case 'debug':
        color = ANSI_BLUE;
        break;
      case 'error':
        color = ANSI_RED;
        break;
      default:
        color = ANSI_RESET;
        break;
    }

    return `${color}[${this.name}]`;
  }

  isDef(obj) {
    return obj !== null && obj !== undefined
  }

  makeDate() {
    const date = new Date();
    const timezone = date.getTimezoneOffset() / 60;
    const timezoneOffset = 4;

    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let hours = date.getHours() + timezone + 4;
    let mins = date.getMinutes() + '';
    let seconds = date.getSeconds() + '';

    const isNextDay = hours > 23;
    const isNextMonth = dd + 1 > 31 && isNextDay;
    const isNextYear = mm + 1 > 12 && isNextMonth;
    if (isNextDay) {
      hours = hours - 24;
      dd = dd + 1;
    }
    if (isNextMonth) {
      dd = 1;
      mm = mm + 1;
    }
    if (isNextYear) {
      mm = 1;
      yy = yy + 1;
    }
    hours += '';
    dd += '';
    mm += '';
    yy += '';

    mm = this.isDef(mm[1]) ? mm : '0' + mm;
    dd = this.isDef(dd[1]) ? dd : '0' + dd;
    hours = this.isDef(hours[1]) ? hours : '0' + hours;
    mins = this.isDef(mins[1]) ? mins : '0' + mins;
    seconds = this.isDef(seconds[1]) ? seconds : '0' + seconds;

    return `[ ${dd}/${mm}/${yy} | ${hours}:${mins}:${seconds} ]`;
  }

  getDate() {
    return ANSI_CYAN + this.makeDate();
  }

  log(msg) {
    console.log(this.getDate() + this.getName('log') + `: ${msg}`, ANSI_RESET);
  }

  debug(msg, obj) {
    console.log(this.getDate() + this.getName('debug') + `: ${msg}\n`, obj, ANSI_RESET);
  }

  error(msg, err) {
    console.log(this.getDate() + this.getName('error') + `: ${msg}\n`, err, ANSI_RESET);
  }

}
