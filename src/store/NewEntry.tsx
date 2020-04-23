// import * as contentful from 'contentful';
import * as actions from './newEntry/actions';

export function createPost(post: { title: string, tech: string, status: string, content: string, tags: string, path: string, icon: string }) {
    post.path = post.title.replace(/\s+/g, '-').toLowerCase();

    return (dispatch: (arg0: { type: string; }) => void) => {
        dispatch(actions.postSending());

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': '*'
            },
            body: JSON.stringify(post)
        }

        return fetch('https://kdau9lg3g0.execute-api.us-east-1.amazonaws.com/dev/create-post', requestOptions)
            .then(res => res.json())
            .then(json => {
                dispatch(actions.sendPostSuccess(json.post))
            })
            .catch(e => console.log(`There was an error creating new post`, e));
    }
}