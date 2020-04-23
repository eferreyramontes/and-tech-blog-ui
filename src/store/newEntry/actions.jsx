/**
* Blog Actions
*/
import * as types from './types';

export function postSending() {
    console.log(`postSending`);
    return { type: types.POST_SENDING }
}

export function sendPostSuccess(post) {
    console.log(`sendPostSuccess`);
    return { type: types.POST_SENT_SUCCESSFULLY, post }
}