import type from '../type';

const defaultState = {
  logoCss: {
    width: '190px',
    height: '224px'
  },
  bodyCss: 'page-index'
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case type.changePathname: return {

    }
    default: return state;
  }
}