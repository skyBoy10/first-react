import React, { Component } from 'react';
import {Form, Row, Col, Input, Icon, Button} from 'antd';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/userLogin';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errs, vals) => {
            if(!errs)
            {
                this.props.submitLogin(vals);
            }
            else
            {
                this.setState({ isFetch: false })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (<div className='pos-a m-l--300 m-t--200 t-half l-half h-300 w-600 b-c-gray-1'>
        <Form onSubmit = {this.handleSubmit} className='h-full'>
            <Row className='p-t-20 p-b-20 font-23 txt-center'>
                <Col span={14} offset={5}>
                    小天地管理平台
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={5}>
                    <FormItem>
                        {
                            getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名！'}]
                            })
                            (<Input placeholder="用户名" type='text' prefix={<Icon type="user"></Icon>} />)
                        }
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={5}>
                    <FormItem>
                        {
                            getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码！'}]
                            })
                            (<Input placeholder='密码' type='password' prefix={<Icon type='key'></Icon>}/>)
                        }
                    </FormItem>
                </Col>
            </Row>
            <Row className='m-t-20'>
                <Col span={10} offset={7}>
                    {!this.props.isFetch ? (<Button type='primary' className='w-full' htmlType="submit">登 录</Button>) : 
                    (<Button type='default' className='w-full' htmlType='button' disabled>登 录...</Button>)}
                </Col>
            </Row>
        </Form>
    </div>);
    }
}

const loginForm = Form.create()(Login);
const mapStateToProps = (state, ownProps) => {
    return {
        isFetch: state.login.isFetch,
        isAdmin: state.login.isAdmin
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitLogin: (vals) => { 
            dispatch(loginAction(vals))
        }
    };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);