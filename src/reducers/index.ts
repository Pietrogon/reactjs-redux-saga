import { combineReducers } from 'redux';
import auth from './auth';
import appointments from './appointment';
import projects from './projects';

export default combineReducers({
  auth,
  appointments,
  projects,
});
