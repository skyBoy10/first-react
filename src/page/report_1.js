import React, { Component } from 'react';
import { Row, Col, DatePicker } from 'antd';
import moment from 'moment';

//共用组件
import Pie from '../components/Pie';
import Line from '../components/Line';

const { RangePicker } = DatePicker;
class firstReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excellentSys: [
                { id: '1810001', sysName: '刑侦总队', leader: '杨刚' },
                { id: '1810002', sysName: '浦东新区治安总队', leader: '赵龙飞' },
                { id: '1810003', sysName: '普陀区治安总队', leader: '李彤' },
            ],
            badSys: [
                { id: '1810004', sysName: '海淀区消防总队', leader: '王朝' },
                { id: '1810005', sysName: '徐汇区治安总队', leader: '赵刚' }
            ],
            range: {
                startDate: moment().format('YYYY/MM/DD'),
                endDate: moment().add(7, 'd').format('YYYY/MM/DD'),
                activeWeek: true
            }
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.switchDate = this.switchDate.bind(this);
    }
    handleDateChange(dates, dateStr) {
        console.log(dateStr);
    }
    switchDate(type) {
        switch(type) {
            case 1:
                this.setState({ range: {
                    startDate: moment().format('YYYY/MM/DD'),
                    endDate: moment().add(7, 'd').format('YYYY/MM/DD'),
                    activeWeek: true
                } })
                break;
            case 2:
                this.setState({ range: {
                    startDate: moment().format('YYYY/MM/DD'),
                    endDate: moment().add(1, 'months').format('YYYY/MM/DD'),
                    activeWeek: false
                } })
                break;
            default:
                break;
        }
    }
    render() {
        const dateFormat = 'YYYY/MM/DD';
        return (
            <div className='p-10'>
                <div className='box-shadow-1 m-b-20 b-c-white'>
                    <Row className='l-h-50 txt-center font-15 font-bold'>
                        <Col span={6}>
                            业务系统总数
                        </Col>
                        <Col span={6}>
                            表总数
                        </Col>
                        <Col span={6}>
                            已评估表
                        </Col>
                        <Col span={6}>
                            评估覆盖率
                        </Col>
                    </Row>
                    <Row className='l-h-50 txt-center font-20'>
                        <Col span={6} className='font-bold'>180</Col>
                        <Col span={6} className='font-c-success'>5592</Col>
                        <Col span={6} className='font-c-success'>5</Col>
                        <Col span={6} className='font-c-success'>0.9%</Col>
                    </Row>
                </div>
                <div className='m-b-20'>
                    <Row className='h-300'>
                        <Col span={8} className='h-full p-r-10'>
                            <div className='box-shadow-1 b-c-white h-full'>
                                <h3 className='txt-center l-h-50'>成熟度优秀业务系统</h3>
                                <div className='l-h-30 txt-center b-c-gray-2'>
                                    <span className='inline-b w-half font-bold'>系统名称</span>
                                    <span className='inline-b w-half font-bold'>负责人</span>
                                </div>
                                {
                                    this.state.excellentSys.map((item) => {
                                        return (
                                            <div className='l-h-30 txt-center font-c-black' key={item.id}>
                                                <span className='inline-b w-half'>{item.sysName}</span>
                                                <span className='inline-b w-half'>{item.leader}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Col>
                        <Col span={8} className='h-full p-r-10'>
                            <div className='box-shadow-1 b-c-white h-full'>
                                <Pie />
                            </div>
                        </Col>
                        <Col span={8} className='h-full'>
                            <div className='box-shadow-1 b-c-white h-full'>
                                <h3 className='txt-center l-h-50'>成熟度差的业务系统</h3>
                                <div className='l-h-30 txt-center b-c-gray-2'>
                                    <span className='inline-b w-half font-bold'>系统名称</span>
                                    <span className='inline-b w-half font-bold'>负责人</span>
                                </div>
                                {
                                    this.state.badSys.map((item) => {
                                        return (
                                            <div className='l-h-30 txt-center font-c-gray' key={item.id}>
                                                <span className='inline-b w-half'>{item.sysName}</span>
                                                <span className='inline-b w-half'>{item.leader}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='box-shadow-1 p-10 b-c-white'>
                    <div className='m-b-10 txt-right cus-a'>
                        <a className={this.state.range.activeWeek ? 'active m-r-10 l-h-30 inline-b' : 'm-r-10 l-h-30 inline-b'} 
                        href='javascript:void(0);'
                        onClick={this.switchDate.bind(this, 1)}>本周</a>
                        <a className={this.state.range.activeWeek ? 'm-r-10 l-h-30 inline-b' : 'active m-r-10 l-h-30 inline-b'}
                        href='javascript:void(0);' 
                        onClick={this.switchDate.bind(this, 2)}>本月</a>
                        <RangePicker onChange={this.handleDateChange}
                        value={[moment(this.state.range.startDate, dateFormat), moment(this.state.range.endDate, dateFormat)]}
                        defaultValue={[moment(this.state.range.startDate, dateFormat), moment(this.state.range.endDate, dateFormat)]}
                        format={dateFormat} />
                    </div>
                    <Line />
                </div>
            </div>
        );
    };
};

export default firstReport;