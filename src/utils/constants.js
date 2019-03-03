import { makeDates, makeHours } from 'utils/dataFormers';

export const STATUS_FILTERS = {
  allIds: ['all', 'todo', 'in progress', 'done'],
  byIds: {
    ALL: 'all',
    TODO: 'todo',
    IN_PROGRESS: 'in progress',
    DONE: 'done',
  }
}

export const STATUS_LIST = [
  { id: 0, name: 'Todo' },
  { id: 1, name: 'In Progress' },
  { id: 2, name: 'Done' },
];

export const PRIORITY_LIST = [
  { id: 0, name: 'Minor' },
  { id: 1, name: 'Major' },
];

export const DAYS_OPTIONS = makeDates(29);
export const HOURS_OPTIONS = makeHours(24);
