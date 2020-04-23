// import * as contentful from 'contentful';
import * as actions from './blog/actions';

// const client = contentful.createClient({
//     space: 'yeharevg4h6t',
//     accessToken: 'lVI2zkVJUFUq6WfX_3ugT_GLX5nJjqAgP6Mw2gg2f2Q'
// })

export function loadBlog() {
    return (dispatch: (arg0: { type: string; isLoading?: boolean; posts?: any; }) => void) => {
        dispatch(actions.blogLoading());

        return fetch('https://kdau9lg3g0.execute-api.us-east-1.amazonaws.com/dev/list-posts')
            .then(res => res.json())
            .then(json => dispatch(actions.loadBlogSuccess(json)))
            .catch(e => console.log(`There was an error consuming backend`, e));

        // return client.getEntries()
        //     .then(({ items }) => {
        //         console.log(`The list of post is: ${JSON.stringify(items)}`);
        //         setTimeout(() => dispatch(actions.loadBlogSuccess(items)), 1000);
        //         // dispatch(actions.loadBlogSuccess(items));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         dispatch(actions.blogLoading(false))
        //     })
    }
}