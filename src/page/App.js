import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

//共用组件
import Nav from '../components/Nav';
import Top from '../components/Top';
import Bottom from '../components/Bottom';

//页面
import Login from './Login';
import Home from './Home';
import Business from './Business';
import List from './List';
import report1 from './report_1'; 

const { Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if(!this.props.isAdmin) {
            history.push('/login');
        }
    }
    render() {
        return (
            <div className='h-full'>
            <Route path='/login' component={Login} />
            {
                this.props.isAdmin && 
                (
                    <Layout className='h-full'>
                        <Nav></Nav>
                        <Layout>
                            <Top></Top>
                            <Content className='b-c-gray-1 pos-r scroll-y'>
                                <Route path='/home' component={Home} />
                                <Route path='/business' component={Business} />
                                <Route path='/list' component={List} />
                                <Route path='/report1' component={report1} />
                            </Content>
                            <Bottom></Bottom>
                        </Layout>
                    </Layout>
                )
            }      
            </div>
        );
    }
    componentDidUpdate() {
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAdmin: state.login.isAdmin
    };
};

export default connect(mapStateToProps)(App);