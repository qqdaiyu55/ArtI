import * as React from 'react'

type Props = {
  handleClick: (event: any) => void
  width?: number
  height?: number
  imgSrc?: string
  title?: string
}

class CircleBtn extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    width: 80,
    height: 80,
    imgSrc: 'https://i0.wp.com/www.artstation.com/assets/default_avatar.jpg?ssl=1'
  }

  constructor (props: Props) {
    super(props)
    this.clickBtn = this.clickBtn.bind(this)
  }

  render () {
    const { width, height, imgSrc, title } = this.props

    const style = {
      width,
      height,
      borderRadius: width,
      cursor: 'pointer',
      overflow: 'hidden'
    }

    return (
      <div
        onClick={this.clickBtn}
      >
        <div style={style}><img src={imgSrc} style={{width: '100%', height: '100%'}}/></div>
        {title ? <h3>{title}</h3> : null}
      </div>
    )
  }

  clickBtn () {
    const { handleClick, title } = this.props
    handleClick(title)
  }
}

export default CircleBtn
