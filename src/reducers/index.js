import { combineReducers } from 'redux';
import wikiReducer from './wikiReducer'


export default combineReducers({
    wiki: wikiReducer
})