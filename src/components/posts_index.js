import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // this is a lifecycle method
  // react will call this automatically whenever the component
  // will be rendered for the FIRST TIME
  // only called once
  //
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(x => {
      return (
        <li key={x.id} className="list-group-item">
          <Link to={`posts/${x.id}`}>
            <span className="pull-xs-right">{x.categories}</span>
            <strong>{x.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
