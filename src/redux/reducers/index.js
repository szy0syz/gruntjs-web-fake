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
    case type.logoCss: return {

    }
    case type.bodyCss: return {

    }
    default: return state;
  }
}