import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // this is a lifecycle method
  // react will call this automatically whenever the component
  // will be rendered for the FIRST TIME
  // only called once
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">
						Add a Post
          </Link>
        </div>
				List of blog posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
