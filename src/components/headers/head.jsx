import React, { Component } from 'react'
import { Layout} from 'antd'
import Navigation from './navigation';


const { Header } = Layout
export default class HeadPage extends Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <img className="logo" src={require('../../assets/images/caisenlogo.png')} alt="logo"  />
                    <img className="logoName" src={require('../../assets/images/caisenword.png')} alt="name"  />
                    <Navigation/>
                    
                </Header>
            </div>
        )
    }
}
