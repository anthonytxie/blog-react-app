import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index.js';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
// whenever someone goes to / render app component

// within nested routes.... child component gets pass to parent
// as this.props.children
// need to render this.props.children within the parent component
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="post/new" component={PostNew} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
);
