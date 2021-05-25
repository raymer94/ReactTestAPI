import { createStore, applyMiddleware } from 'redux';
import CommentsReducer from './reducers/CommentsReducer'
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';


export const store = createStore(CommentsReducer, applyMiddleware(logger, thunk));