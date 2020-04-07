import React from 'react';
import BlogNav from './blog/shared/BlogNav';
import BlogContent from './blog/shared/BlogContent';
import PageContent from './../components/PageContent';

const BlogPost = ({ location: { state: { props } } }) => (
    <PageContent>
        <BlogNav date={props.date} status={props.status} to="/blog" />
        <BlogContent {...props} />
    </PageContent>
)
export default BlogPost