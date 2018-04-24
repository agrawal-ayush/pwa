import React, { Component } from 'react'
import Post from '../Post/Post'

import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postActions'

class Home extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  render () {
    const postItems = this.props.posts.items.map(post => (
      <div key={post.id}>
        <Post {...post} />
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { fetchPosts })(Home)
