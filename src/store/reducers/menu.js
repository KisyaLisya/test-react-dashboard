import { SWITCH_PAGE } from '../actionTypes';

const initialState = {
  active: '',
  menu: [
  	{ id: 'dashboard', name: 'Dashboard', url:'/dashboard', active: false },
  	{ id: 'tasks', name: 'Tasks', url:'/tasks', active: false },
  ]
}

const Menu = (state = initialState, action) => {
  const { type = '', payload = {} } = action;

  switch (type) {
    case SWITCH_PAGE:
      const { active, menu } = state;
      const { page } = payload;

      return {
        active: page,
        menu: menu.map((el) => {
          return {
            ...el,
            active: page === el.id
          }
        })
      };
    default:
      return state;
  }
}

export default Menu;
