import React, { Component } from 'react'
import { Icon, Drawer,Button,Descriptions, Empty } from 'antd'

export default class ContactUs extends Component {
    state={visible:false,childrenDrawer:false};
    showDrawer=()=>{
        this.setState(
            {
                visible:true,
            }
        );
    };
    onClose=()=>{
        this.setState({
            visible:false,
        });
    };
    showChildrenDrawer = () => {
        this.setState({
          childrenDrawer: true,
        });
      };
    
      onChildrenDrawerClose = () => {
        this.setState({
          childrenDrawer: false,
        });
      };
    render() {
        return (
            <div>
                <Button onClick={this.showDrawer} type="primary" style={{position:"fixed",bottom:"10%",right:"90px"}}>
                                <Icon type="mail"></Icon>
                </Button>
                <Drawer title="联系我们" width={520} closable={false}
                    onClose={this.onClose} visible={this.state.visible}>
                    <Descriptions title="联系方式" layout="vertical" bordered>
                        <Descriptions.Item label="公司" span={3}>彩森信息科技公司</Descriptions.Item>
                        <Descriptions.Item label="董事长" span={3}>蔡老板</Descriptions.Item>
                        <Descriptions.Item label="微信公众号" span={3}>
                            <Button type="primary" onClick={this.showChildrenDrawer}>
                                <Icon type="wechat"></Icon>
                            </Button>
                            
                            <Drawer
                                title="微信公众号"
                                width={320}
                                closable={false}
                                onClose={this.onChildrenDrawerClose}
                                visible={this.state.childrenDrawer}
                            >
                                <Empty/>
                            </Drawer>
                        </Descriptions.Item>
                    </Descriptions>

                </Drawer>
            </div>
        )
    }
}
