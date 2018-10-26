import React, { Component } from 'react';
import { Modal, Row, Col, TimePicker, Radio, Button } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';

import { closeAction } from '../redux/actions/configModal';

const RadioGroup = Radio.Group;

class CusModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            configType: 1
        }

        this.handleOk = this.handleOk.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleOk() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
            this.props.cancelModal();
        }, 2000)
    }
    handleCancel() {
        this.props.cancelModal();
    }
    handleTimeChange(time, timeStr) {
        console.log(time + ' - ' + timeStr);
    }
    updateConfigType(e) {
        console.log(e);
        console.log(this.state.configType);
    }
    render() {
        return (
        <Modal title={this.props.title}
        visible={this.props.isOpenConfigModal}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
            <div className='txt-center'>
                <Button onClick={this.handleCancel}>取消</Button>
                <Button type='primary' onClick={this.handleOk} loading={this.state.loading}>确定</Button>
            </div>
        ]}>
            <RadioGroup className='w-full' onChange={this.updateConfigType} defaultValue={this.state.configType}>
                <Row className='m-b-10'>
                    <Col span={4}><Radio value={1} className='l-h-30'>一次性运行</Radio></Col>
                </Row>
                <Row>
                    <Col span={4}><Radio value={2} className='l-h-30'>定时运行</Radio></Col>
                    <Col span={8}>
                        <TimePicker onChange={this.handleTimeChange} defaultValue={moment(moment().format('HH:mm:ss'), 'HH:mm:ss')} 
                        defaultOpenValue={moment(moment().format('HH:mm:ss'), 'HH:mm:ss')}/>
                    </Col>
                </Row>
            </RadioGroup>
        </Modal>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        isOpenConfigModal: state.detail.isOpenConfigModal
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        cancelModal: () => {
            dispatch(closeAction());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CusModal);