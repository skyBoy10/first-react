import React, { Component } from 'react';
import { Layout, Row, Col, Icon, Dropdown, Menu } from 'antd';
import { connect } from 'react-redux';
import '../css/top.less';
import { signOutAction } from '../redux/actions/userLogin';

const { Header } = Layout;

class topCom extends Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
    }
    signOut() {
        this.props.signOut();
    }
    render() {
        const menus = (
            <Menu>
                <Menu.Item>
                    <a href='javascript:void(0)'>
                        <Icon type='user' className='m-r-5' />个人中心
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href='javascript:void(0)' onClick={this.signOut}>
                        <Icon type='key' className='m-r-5' />退出
                    </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header className='header b-c-blue-1'>
                <Row>
                    <Col span={3} className='p-l-10'>
                        <span className='f-logo'>小天地</span>
                    </Col>
                    <Col span={6} offset={15} className='txt-right p-r-20'>
                        <Dropdown overlay={menus}>
                        <a className="ant-dropdown-link font-c-white" href="javascript:void(0);">
                            <Icon type='user' className='m-r-10' />
                            {this.props.username}
                            <Icon type='down'/>
                        </a>                    
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.login.username
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signOut: () => {
            dispatch(signOutAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(topCom);