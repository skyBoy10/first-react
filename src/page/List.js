import React, { Component } from 'react';
import { Row, Col, Button, Input, Select } from 'antd';
import { connect } from 'react-redux';

//共用组件
import Tree from '../components/Tree';
import Table from '../components/Table';
import CusModal from '../components/ConfigModal';

import { openAction } from '../redux/actions/configModal';

const Search = Input.Search;
const Option = Select.Option;
class todoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }

        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    openModal() {
        this.props.openModal();
    }
    search(keyword) {
        console.log(keyword);
    }
    handleChange(val) {
        console.log(val);
    }
    render() {
        const title = '配置评估任务策略';

        return (
            <div className='flex-1 pos-a l-0 r-0 b-0 t-0 b-c-white'>
                <div className='grow-0 w-200 h-full b-r-1'>
                    <Tree />
                </div>
                <div className='grow-1 h-full'>
                    <Row className='m-t-10 m-b-10'>
                        <Col span={3} className='l-h-30 p-l-10'>
                            <span className='inline-b'>{this.props.currentFirstName || '一级'}</span>
                            <span className='inline-b m-r-5 m-l-5'>/</span>
                            <span className='inline-b'>{this.props.currentSecName || '二级'}</span>
                        </Col>
                        <Col span={3}>
                            <Button type='primary' onClick={this.openModal} disabled={this.props.isDisabled}>配置评估任务</Button>
                        </Col>
                        <Col span={2} offset={11} className='p-r-10'>
                            <Select defaultValue='0' value='0' onChange={this.handleChange} className='w-full'>
                                <Option value='0'>全部</Option>
                                <Option value='1'>已评估</Option>
                                <Option value='2'>未评估</Option>
                                <Option value='3'>正在评估</Option>
                            </Select>
                        </Col>
                        <Col span={5} className='p-r-10'>
                            {this.state.keyword}
                            <Search placeholder='输入关键词' onSearch={this.search.bind(this)} />
                        </Col>
                    </Row>
                    <Table />
                    <CusModal title={title} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentFirstName: state.nodes.currentFirstNode,
        currentSecName: state.detail.currentSecNode,
        isDisabled: state.detail.isDisabled
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openModal: () => {
            dispatch(openAction());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(todoList);