import * as React from 'react'

import CircleBtn from '../components/CircleBtn'

const config = require('../../../config.json')

const Components: object = {}
config.extensions.forEach(e => {
  // Todo: dynamically require, allow customizing extension entry instead of 'out/extension'
  // But it seems impossible after searching
  Components[e] = require('../../../extensions/' + e + '/out/extension').default
})

type State = {
  ext: string | undefined
}

class Homepage extends React.Component<{}, State> {
  constructor () {
    super({})
    this.state = {
      ext: undefined
    }
    this.handleClick = this.handleClick.bind(this)
    this.getRenderedComponent = this.getRenderedComponent.bind(this)
  }

  render () {
    const renderedComponent: object = this.getRenderedComponent(this.state.ext)

    return (
      <div>
        {renderedComponent}
      </div>
    )
  }

  handleClick (ext: string | undefined): void {
    this.setState({ ext })
  }

  getRenderedComponent (ext: string | undefined) {
    if (ext) {
      const RenderedComponent = Components[ext]
      return <RenderedComponent />
    } else {
      return config.extensions.map(e => {
        return (
          <CircleBtn
            key={'ext-btn-' + e}
            title={e}
            handleClick={this.handleClick}
          />
        )
      })
    }
  }
}

export default Homepage
