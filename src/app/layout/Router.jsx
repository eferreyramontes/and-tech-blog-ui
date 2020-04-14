import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../Home';
import Blog from './../Blog';
import BlogPost from './../BlogPost';
import NewEntry from './../NewEntry';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog/:blogPost' component={BlogPost} />
        <Route path='/blog' component={Blog} />
        <Route path='/new-entry' component={NewEntry} />
    </Switch>
)

export default Router;