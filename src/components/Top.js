import React, { Component } from 'react';
import { Layout, Row, Col, Icon, Dropdown, Menu } from 'antd';
import { connect } from 'react-redux';
import '../css/top.less';
const { Header } = Layout;

const menus = (
    <Menu>
        <Menu.Item>
            <a href='#'>
                <Icon type='user' className='m-r-5' />个人中心
            </a>
        </Menu.Item>
        <Menu.Item>
            <a href='#'>
                <Icon type='key' className='m-r-5' />退出
            </a>
        </Menu.Item>
    </Menu>
);

const topCom = props => (
    <Header className='header b-c-blue-1'>
        <Row>
            <Col span={3} className='p-l-10'>
                <span className='f-logo'>小天地</span>
            </Col>
            <Col span={6} offset={15} className='txt-right p-r-20'>
                <Dropdown overlay={menus}>
                <a className="ant-dropdown-link font-c-white" href="#">
                    <Icon type='user' className='m-r-10' />
                    {props.username}
                    <Icon type='down'/>
                </a>                    
                </Dropdown>
            </Col>
        </Row>
    </Header>
);

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.login.username
    }
};

export default connect(mapStateToProps)(topCom);