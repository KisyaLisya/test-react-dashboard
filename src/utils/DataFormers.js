
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
