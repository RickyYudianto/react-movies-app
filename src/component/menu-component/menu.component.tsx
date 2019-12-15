import React from 'react';

import { withRouter, RouteComponentProps } from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react';

import { MenuConstant } from '../../constant/menu.constant';
import { PathConstant } from '../../constant/path.constant';

import 'semantic-ui-css/semantic.min.css';
import './menu.component.css';

class MenuComponent extends React.Component<RouteComponentProps> {

  handleItemClick(path: string) {    
    this.props.history.push(path);
    
  }

  render() {
    const { pathname } = this.props.history.location;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name={MenuConstant.LIST}
            active={pathname === PathConstant.MOVIE + PathConstant.LIST}
            onClick={() => this.handleItemClick(PathConstant.MOVIE + PathConstant.LIST)}
          />
          <Menu.Item
            name={MenuConstant.NOW_PLAYING}
            active={pathname === PathConstant.MOVIE + PathConstant.NOW_PLAYING}
            onClick={() => this.handleItemClick(PathConstant.MOVIE + PathConstant.NOW_PLAYING)}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name={MenuConstant.LOGIN}
              active={pathname === PathConstant.LOGIN}
              onClick={() => this.handleItemClick(PathConstant.LOGIN)}
            />
            <Menu.Item
              name={MenuConstant.REGISTER}
              active={pathname === PathConstant.REGISTER}
              onClick={() => this.handleItemClick(PathConstant.REGISTER)}
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
export default withRouter(MenuComponent);
