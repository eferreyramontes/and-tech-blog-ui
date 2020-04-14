/**
* Blog Actions
*/
import * as types from './types';

export function blogLoading(isLoading = true) {
    return { type: types.BLOG_LOADING, isLoading }
}

export function loadBlogSuccess(posts) {
    return { type: types.LOAD_BLOG_POSTS_SUCCESS, posts }
}

export function postSending() {
    console.log(`postSending`);
    return { type: types.POST_SENDING }
}

export function sendPostSuccess() {
    console.log(`sendPostSuccess`);
    return { type: types.POST_SENT_SUCCESSFULLY }
}