import React, { Component } from 'react'

class PostsNew extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/posts/new">
            Add a New Post
          </Link>
        </div>
        PostsNew
      </div>
    )
  }
}

export default PostsNew;
