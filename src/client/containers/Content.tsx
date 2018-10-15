import * as React from 'react'
import { AsyncPanel, DragTab, DragTabList, ExtraButton, Panel, PanelList, styled, Tab, TabList, Tabs } from 'react-tabtab'

import HomePage from './Homepage'

// Customize the style of Tab components
let { TabListStyle, ActionButtonStyle, TabStyle, PanelStyle } = styled

const bgColor: string = '#221f1f'
const primaryRed: string = '#e50914'

TabListStyle = TabListStyle.extend`
  background: ${bgColor};
`

PanelStyle = PanelStyle.extend`
  background: ${bgColor};
`

TabStyle = TabStyle.extend`
  height: 40px;
  min-width: 70px;
  margin-left: 8px;
  margin-right: 8px;
  border: 2px solid ${primaryRed};
  border-radius: 40px;
  text-align: center;
`

const customStyle: object = {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle,
}

class Content extends React.Component {
  render () {
    return (
      <Tabs
        customStyle={customStyle}
      >
        <TabList>
          <Tab closable={true}>HomePage</Tab>
        </TabList>
        <PanelList>
          <Panel>
            <HomePage />
          </Panel>
        </PanelList>
      </Tabs>
    )
  }

  handleExtraButton () {
    // const { tabs } = this.state
  }
}

export default Content
