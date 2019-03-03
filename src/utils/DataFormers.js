
import { isDef } from 'utils/Utils';

export const makeDates = (number) => {
  const dates = [];

  for (let i = 0; i < number; i += 1) {
    const day = i;
    const week = Math.floor(day / 7);
    const weekDay = day % 7;
    const dateEl = {};

    if (week > 0) {
      const weekWord = week > 1 ? 'weeks' : 'week';
      const dayWord = weekDay > 1 ? 'days' : 'day';

      dateEl = {
        id: `${week}w${weekDay > 0 ? `_${weekDay}d` : ''}`,
        name: `${week} ${weekWord}${weekDay > 0 ? ` ${weekDay} ${dayWord}` : ''}`
      };
    } else {
      const dayWord = day > 1 ? 'days' : 'day';

      dateEl = {
        id: `${day}d`,
        name: `${day} ${dayWord}`
      };
    }

    dates.push(dateEl);
  }

  return dates;
}

export const makeHours = (number) => {
  const dates = [];

  for (let i = 0; i < number; i += 1) {
    const hour = i;
    const hourWord = hour > 1 ? 'hours' : 'hour';
    const dateEl = {
      id: `${hour}h`,
      name: `${hour} ${hourWord}`
    };

    dates.push(dateEl);
  }

  return dates;
}

export const makeStatusData = (id) => {
  const statusList = {
    0: 'todo',
    1: 'in progress',
    2: 'done',
  }
  const status = isDef(statusList[id]) ? statusList[id] : 'todo';

  return [id, status];
}

export const makePriority = (id) => {
  const priorityList = {
    0: 'minor',
    1: 'major'
  }
  const priority = isDef(priorityList[id]) ? priorityList[id] : 'minor';

  return [id, priority];
}

export const getMonthName = (month) => {
  const monthId = Number(month);

  switch (monthId) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sept';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return 'Unknown';
  }
}

export const formTaksDate = (date) => {
  const strDate = date.toString();
  const year = strDate.slice(0, 4);
  const month = strDate.slice(4, 6);
  const day = strDate.slice(6, 8);

  const formedStrDate = `${day} ${getMonthName(month)} ${year}`;
  return [date, formedStrDate];
}

export const formTasksList = (list) => {
  return list
    .reduce((acc, el) => {
      const { allIds = [], byIds = {} } = acc;
      const {
        id = 0,
        status = 0,
        priority = 0,
        createdAt = 20000101,
        name: task
      } = el;

      const taskObj = {
        status: makeStatusData(status),
        priority: makePriority(priority),
        createdAt: formTaksDate(createdAt),
        task
      };

      return {
        allIds: [...allIds, id],
        byIds: {
          ...byIds,
          [id]: taskObj
        }
      }
    }, {});
}

export const formTaskData = (data) => {
  const { id, task } = data;
  const { status, priority, createdAt } = task;
  return {
    id,
    ...task,
    status: status,
    priority: priority,
    createdAt: formTaksDate(createdAt),
  };
}
