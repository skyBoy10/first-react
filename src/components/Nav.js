import React,  { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import history from '../history';
import '../css/nav.less';
const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;

class CusMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.onCollapse = this.onCollapse.bind(this);
    }
    componentWillMount() { //挂载前

    }
    onCollapse(collapsed) {
        this.setState({collapsed});
    }
    render() {
        return (
            <Sider collapsible
            collapsed = { this.state.collapsed }
            onCollapse = { this.onCollapse }>
                <div className='logo'></div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key='1'>
                        <Link to='/home'>
                            <Icon type='home'></Icon>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/business'>
                            <Icon type='laptop'></Icon>
                            <span>办公平台</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key='sub1'
                    title={<span><Icon type='line-chart'></Icon><span>数据图表</span></span>}>
                        <Menu.Item key='3'>
                            <Link to='/report1'>
                                报表1
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='4'>Jerry</Menu.Item>
                        <Menu.Item key='5'>Gavin</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Link to='/list'>
                            <Icon type="solution" />
                            <span>列表</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
    componentDidMount() { //挂载后
        history.push('/home');
    }
    componentWillUnmount() { //卸载前

    }
}

export default CusMenu;