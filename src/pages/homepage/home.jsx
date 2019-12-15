import React, { Component } from 'react'
import { Layout,Empty } from 'antd'
import Head from '../../components/headers/head'
import Foot from '../../components/footers/foot'
import HomeAnchor from '../../components/contents/homeAnchor'
import ContactUs from '../../components/contents/contactUs'
import HomeCarousel from '../../components/contents/homeCarousel'

const { Content } = Layout;
export default class Home extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Head id="title" />
                    <Content style={{ padding: '0 70px' }}>
                        
                        <div className="home-content" id="content1" style={{ padding: 24, minHeight: 380 }}>
                            <HomeCarousel/>
                        </div>
                        <div className="home-content"  id="content2" style={{ padding: 24, minHeight: 380 }}>
                            <Empty />
                        </div>
                        <div className="home-content"  id="content3" style={{  padding: 24, minHeight: 380 }}>
                            <Empty />
                        </div>
                        <HomeAnchor />
                        <ContactUs />
                    </Content>
                    <Foot />
                </Layout>
            </div>
        )
    }
}
