import users from './users';
import notes from './notes';
import {combineReducers} from 'redux';

const allReducers = combineReducers({users, notes});

export default allReducers;
