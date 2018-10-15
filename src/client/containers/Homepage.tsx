import * as React from 'react'

import CircleBtn from '../components/CircleBtn'

// const Extension = require('../../../extensions/analyzer/out/extension.js').default
// import Extension from '../../../extensions/analyzer/out/extension.js'

const config = require('../../../config.json')

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
    // const exts = config.extensions.map(e => {
    //   return (
    //     <CircleBtn
    //       key={'ext-btn-' + e}
    //       title={e}
    //       handleClick={this.handleClick}
    //     />
    //   )
    // })

    // const module = this.state.ext || exts

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
      // const extRootPath = '../../../extensions/' + ext + '/'
      // const extEntry = require(extRootPath + 'package.json').main
      // console.log(extEntry)
      const extEntry = require('../../../extensions/' + ext + '/package.json').main
      // const extPath = extRootPath + extEntry
      const extPath = '../../../extensions/' + ext + '/' + extEntry + '.js'
      // console.log(extEntry, extPath)

      // import Extension from extPath
      const  Extension = require(extPath).default
      return <Extension />
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
