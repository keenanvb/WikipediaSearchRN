import { SEARCH_UPDATE, GET_WIKI_DATA, GET_WIKI_DATA_ERROR } from './types';
import axios from 'axios';

//update search
export const searchUpdate = ({ prop, value }) => {
    return {
        type: SEARCH_UPDATE,
        payload: { prop, value }
    };
};

export const getWikipedaData = () => {
    return async (dispatch, getState) => {
        try {
            const searchState = getState().wiki.search;

            let url = 'https://en.wikipedia.org/w/api.php';

            let params = {
                action: 'query',
                list: 'search',
                srsearch: searchState,
                format: 'json'
            };

            url = url + '?origin=*';
            Object.keys(params).forEach((key) => {
                url += '&' + key + '=' + params[key];
            });

            let res = await axios.get(url);
            const { query: { search } } = res.data;
            dispatch({ type: GET_WIKI_DATA, payload: search });
        } catch (error) {
            console.log('error', error);
            dispatch({ type: GET_WIKI_DATA_ERROR, payload: [] })
        }
    };
};