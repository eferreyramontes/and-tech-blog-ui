import React from 'react';
import { connect } from 'react-redux';
import BlogItem from './blog/BlogItem';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import Loader from '../components/Loader';

class Blog extends React.Component {

    render() {
        return (
            <div>
                <PageHeader color="is-danger" title="Java Blog">
                    Your standard <strong>Java</strong> blog section, compilers, optimizations, frameworks and more.
                </PageHeader>
                {
                    this.props.blog.loading
                        ? <Loader className="has-text-primary"></Loader>
                        : <PageContent>
                            <br />
                            {this.props.blog.posts.map(({ fields }, i) =>
                                <BlogItem key={i} {...fields} />
                            )}
                        </PageContent>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        blog: state.blog
    }
}

export default connect(mapStateToProps)(Blog);