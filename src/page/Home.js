import React,  { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    testCLick = () => {
        console.log(this.props);
    }

    render() {
        return (<div><button type='button' onClick={this.testCLick}>click</button>Home</div>);
    }
};

export default connect(({ login }) => ({ login }))(Home);