import React from 'react'
import { render } from 'react-dom'

import './base.css'
import App from './App'
import { install } from 'offline-plugin/runtime'

render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  install()
}
