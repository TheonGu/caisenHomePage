import React, { Component } from 'react'
import { Anchor } from 'antd';

const {Link} =Anchor
export default class HomeAnchor extends Component {
    state = {
        targetOffset: undefined,
      };
    
      componentDidMount() {
        this.setState({
          targetOffset: window.innerHeight / 2,
        });
      }
    render() {
        return (
            <div>
                <Anchor targetOffset={this.state.targetOffset} affix="false" style={{left:"20px",top:"50%",position:"fixed",background: "rgba(0,0,0,0)" }}>
                    <Link href="#content1" style={{position: "relative",color: "#FFFFFF"}} title="公司简介" />
                    <Link href="#content2" style={{position: "relative",color: "#FFFFFF"}} title="产品介绍"/>
                    <Link href="#content3" style={{position: "relative",color: "#FFFFFF"}}  title="服务与支持"/>
                </Anchor>
            </div>
        )
    }
}
