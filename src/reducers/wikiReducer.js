
import { SEARCH_UPDATE, GET_WIKI_DATA, GET_WIKI_DATA_ERROR } from '../actions/types';

const INITIAL_STATE = {
    search: '',
    wikiData: [],
    loading: true,
    error: {}
};
export default (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {
        case SEARCH_UPDATE:
            return { ...state, [payload.prop]: payload.value }
        case GET_WIKI_DATA:
            return { ...state, wikiData: payload, loading: false };
        case GET_WIKI_DATA_ERROR:
            return { ...state, wikiData: payload, loading: false }
        default:
            return state;
    }
}