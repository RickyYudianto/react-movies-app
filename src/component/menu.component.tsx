import React from 'react';

import { Menu, Segment } from 'semantic-ui-react';

import { MenuConstant } from '../constant/menu.constant';

import 'semantic-ui-css/semantic.min.css';

export default class MenuComponent extends React.Component {
  state = { activeItem: MenuConstant.LIST }

  handleItemClick = (name: string) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name={MenuConstant.LIST}
            active={activeItem === MenuConstant.LIST}
            onClick={() => this.handleItemClick(MenuConstant.LIST)}
          />
          <Menu.Item
            name={MenuConstant.NOW_PLAYING}
            active={activeItem === MenuConstant.NOW_PLAYING}
            onClick={() => this.handleItemClick(MenuConstant.NOW_PLAYING)}
          />
          <Menu.Item
            name={MenuConstant.UP_COMING}
            active={activeItem === MenuConstant.UP_COMING}
            onClick={() => this.handleItemClick(MenuConstant.UP_COMING)}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name={MenuConstant.LOGIN}
              active={activeItem === MenuConstant.LOGIN}
              onClick={() => this.handleItemClick(MenuConstant.LOGIN)}
            />
            <Menu.Item
              name={MenuConstant.REGISTER}
              active={activeItem === MenuConstant.REGISTER}
              onClick={() => this.handleItemClick(MenuConstant.REGISTER)}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          {this.props.children}
        </Segment>
      </div>
    )
  }
}
