import React, { Component } from 'react'
import {Layout} from 'antd'

const {Footer}=Layout
const year=(new Date()).getFullYear();
export default class Foot extends Component {
    render() {
        return (
            <div>
                <Footer style={{ textAlign: 'center' }}>©{year} Created by Caisen</Footer>
            </div>
        )
    }
}
