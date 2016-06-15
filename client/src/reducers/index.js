import { combineReducers } from 'redux';
import RepoReducer from './repoReducer';

const rootReducer = combineReducers({
  repos: RepoReducer
});

export default rootReducer;
