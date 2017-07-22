import { combineReducers } from 'redux';
import auth from './authReducer';
import jobs from './jobReducer';
import likedJobs from './likesReducer';

export default combineReducers({
    auth, jobs, likedJobs
});
