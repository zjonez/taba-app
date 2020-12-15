
import { NAME_REMOVED, NAME_ADDED } from '../actions';

const initState: Array<string> = [];

const names = (state = initState, action: any) => {
  switch (action.type) {
    case NAME_ADDED:
      return [...state, action.payload];
    case NAME_REMOVED:
      return state.filter((item) => { return item !== action.payload });
    default:
      return state;
  }

}

export default names;
