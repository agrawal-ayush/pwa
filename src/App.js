import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import 'normalize.css'
import styles from './App.css'
import Header from './components/Header/Header'
import PostDetail from './components/PostDetail/PostDetail'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import posts from './../blog-posts'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={styles.container}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/post/:slug' component={props => {
                const post = posts.posts.filter(post => props.match.params.slug === post.slug)
                return <PostDetail post={post[0]} />
              }} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
