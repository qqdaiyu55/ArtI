import * as React from 'react'

import Navigation from '../components/Navigation'

class Header extends React.Component {
  render () {
    return (
      <header id='header'>
        <img src='./logo.svg' />
        <Navigation />
      </header>
    )
  }
}

export default Header
