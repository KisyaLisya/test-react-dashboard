/*

  CONFIGURATION DESCRIPTION

  data is an list of objects with TaskData interface

  interface TaskData {
    "id": number
    "name": string // task name
    "status": number // 0 - todo, 1 - in progress, 2 - "done"
    "priority": number // 0 - minor, 1 - major
    "createdAt": number // yyyy-mm-dd, f.ex. 20180813 = 13 August 2018
    "requiredDate": TaskTrackerDate // uses interface TaskTrackerDate, read more below
    "promisedDate": TaskTrackerDate // uses interface TaskTrackerDate, read more below
    "description": string
  }

  requiredDate, promisedDate are objects of TaskTrackerDate interface

  interface TaskTrackerDate {
    days: string // format (1-4)w_(1-6)d or (0-6)d, f.ex. 0d, 2d, 4d, 1w_1d, 3w, 2w_6d
    hours: string // format (0-23)h, f.ex. 0h, 2h, 23h,
  }


*/

module.exports = [
  {
    id: 0,
    name: "Have a nice Day",
    status: 0,
    priority: 1,
    createdAt: 20180813,
    requiredDate: {
      days: '5d',
      hours: '2h'
    },
    promisedDate: {
      days: '1w_1d',
      hours: '7h'
    },
    description: "Have a realy nice day. Make it great again!"
  },
  {
    id: 1,
    name: "Take a drink",
    status: 1,
    priority: 0,
    createdAt: 20180815,
    requiredDate: {
      days: '0d',
      hours: '1h'
    },
    promisedDate: {
      days: '0d',
      hours: '1h'
    },
    description: "Loreum polem. I don't really remember this. Just take a drink"
  },
  {
    id: 2,
    name: "Make a Calandar component",
    status: 2,
    priority: 1,
    createdAt: 20180910,
    requiredDate: {
      days: '2w_6d',
      hours: '0h'
    },
    promisedDate: {
      days: '1w_4d',
      hours: '8h'
    },
    description: "Add clocks and calendar to dashboard"
  },
  {
    id: 3,
    name: "Refactor system components",
    status: 1,
    priority: 0,
    createdAt: 20181109,
    requiredDate: {
      days: '2d',
      hours: '5h'
    },
    promisedDate: {
      days: '2d',
      hours: '2h'
    },
    description: "- Change file structure\n- Fix system dashboard charts"
  },
  {
    id: 4,
    name: "Learn React",
    status: 2,
    priority: 0,
    createdAt: 20181218,
    requiredDate: {
      days: '3d',
      hours: '0h'
    },
    promisedDate: {
      days: '2d',
      hours: '6h'
    },
    description: "Read road to learn react and have fun"
  },
  {
    id: 5,
    name: "Add more info in this",
    status: 2,
    priority: 1,
    createdAt: 20181219,
    requiredDate: {
      days: '1d',
      hours: '4h'
    },
    promisedDate: {
      days: '2d',
      hours: '8h'
    },
    description: "Add more info in this object"
  },
  {
    id: 6,
    name: "Deploy project",
    status: 1,
    priority: 1,
    createdAt: 20181229,
    requiredDate: {
      days: '3d',
      hours: '8h'
    },
    promisedDate: {
      days: '1w_2d',
      hours: '22h'
    },
    description: "Solve problem with server"
  }
]
