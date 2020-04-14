import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
    space: 'yeharevg4h6t',
    accessToken: 'lVI2zkVJUFUq6WfX_3ugT_GLX5nJjqAgP6Mw2gg2f2Q'
})

export function loadBlog() {
    return dispatch => {
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