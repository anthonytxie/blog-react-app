import { FETCH_POSTS } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //this new syntax takes the prexisting objects, and returns a new object
      //with the property all being the payload
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
