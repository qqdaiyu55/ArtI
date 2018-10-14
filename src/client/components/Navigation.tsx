import * as React from 'react'

class Navigation extends React.Component {
  render () {
    return (
      <nav id='navigation'>
        <ul>
          <li><a href='https://github.com/yanqitv/webtorrent-desktop/releases/tag/v0.20.0-yanqi' style={{ textDecoration: 'none', color: '#fff' }}>Download</a></li>
          <li><a href='https://github.com/yanqitv/yanqi.tv/wiki' style={{ textDecoration: 'none', color: '#fff' }}>Wiki</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
