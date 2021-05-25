import { createStore } from 'redux';
import PostReducer from '../redux/reducers/PostReducer'
import { combineReducers } from 'redux';
import { PostState } from '../redux/types/PostTypes';

const r = combineReducers({
    notes: PostReducer
})

export const store = createStore(PostReducer)

export interface ApplicationState {
    notes: PostState
}