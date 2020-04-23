/**
* Blog Reducer
*/
import initialState from '../../store/initialState';
import * as types from './types';

export default function blogReducer(state = initialState.newEntry, action) {
    switch (action.type) {
        case types.POST_SENDING:
            return {
                ...state
            }
        case types.POST_SENT_SUCCESSFULLY:
            return {
                ...state,
                post: action.post,
                postSuccess: true
            }
        default:
            return state;
    }
}