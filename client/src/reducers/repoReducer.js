import { SEARCH_REPO } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_REPO:
      return  [ action.payload.data.repos, ...state ];
      break;
  }
  return state;
};
