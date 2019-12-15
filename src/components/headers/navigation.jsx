import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

export default class Navigation extends Component {

    state = {
        current: 'appstore',
      };
    
      handleClick = e => {
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <Menu onClick={this.handleClick} theme="light" selectedKeys={[this.state.current]} mode="horizontal" style={{ lineHeight: '64px'}} >
                <Menu.Item key="appstore">
                    <Icon type="appstore" />
                    产品
                </Menu.Item>
                <Menu.Item key="setting">
                    <Icon type="setting" />
                    服务和支持
                </Menu.Item>
                <Menu.Item key="build">
                    <Icon type="build" />
                    关于彩森
                </Menu.Item>
            </Menu>
        )
    }
}
