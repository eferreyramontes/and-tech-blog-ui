import React from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';

class Blog extends React.Component {
    state = {
        posts: []
    }

    client = contentful.createClient({
        space: 'yeharevg4h6t',
        accessToken: 'lVI2zkVJUFUq6WfX_3ugT_GLX5nJjqAgP6Mw2gg2f2Q'
    })

    componentDidMount() {
        this.fetchPosts().then(this.setPosts)
    }

    fetchPosts = () => this.client.getEntries();
    setPosts = response => {
        this.setState({
            posts: response.items
        });
    }

    render() {
        return (
            <div>
                <PageHeader color="is-info" title="Code Blog">
                    Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
                </PageHeader>
                <PageContent>
                    <br />
                    {this.state.posts.map(({ fields }, i) =>
                        <BlogItem key={i} {...fields} />
                    )}
                </PageContent>
            </div>
        )
    }
}
export default Blog