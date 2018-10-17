import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Content from './containers/Content'
import Header from './containers/Header'

import './scss/app.scss'

ReactDOM.render(
  <div>
    <Header />
    <Content />
  </div>,
  document.getElementById('root')
)
