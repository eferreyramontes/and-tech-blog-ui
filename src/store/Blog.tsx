import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
    space: 'yeharevg4h6t',
    accessToken: 'lVI2zkVJUFUq6WfX_3ugT_GLX5nJjqAgP6Mw2gg2f2Q'
})

export function loadBlog() {
    return (dispatch: (arg0: { type: string; isLoading?: boolean; posts?: any; }) => void) => {
        dispatch(actions.blogLoading());
        return client.getEntries()
            .then(({ items }) => {
                setTimeout(() => dispatch(actions.loadBlogSuccess(items)), 1000);
                // dispatch(actions.loadBlogSuccess(items));
            })
            .catch(err => {
                console.log(err);
                dispatch(actions.blogLoading(false))
            })
    }
}

export function createPost(post: { title: String }) {
    console.log(`createPost - post: ${JSON.stringify(post)}`);

    return (dispatch: (arg0: { type: string; }) => void) => {
        console.log(`create Post under construction. Post: ${JSON.stringify(post)}`);
        dispatch(actions.postSending());

        return setTimeout(() => dispatch(actions.sendPostSuccess()), 1000);
    }
}