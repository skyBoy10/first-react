import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';

import { updateAction } from '../redux/actions/childNodes';

class CusTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cols = [
            {
                title: '序号',
                dataIndex: 'id'
            },
            {
                title: '业务系统',
                dataIndex: 'business',
            },
            {
                title: '成熟度',
                dataIndex: 'ripeness',
                render: (text, row, index) => {
                    return (
                        <span className={text > '50%' ? 'font-c-success' : 'font-c-fail'}>{text > '50%' ? '优秀' : '不良'}</span>
                    );
                },
            },
            {
                title: '表个数',
                dataIndex: 'tableCnt',
            },
            {
                title: '已评估个数',
                dataIndex: 'accessedCnt',
            },
            {
                title: '评估覆盖率',
                dataIndex: 'accessedOver',
            },
            {
                title: '业务系统覆盖率',
                dataIndex: 'businessOver',
            }
        ];
        
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                if(selectedRowKeys && selectedRowKeys.length > 0)
                {
                    this.props.switchBtn({isDisabled: false});
                }
                else
                {
                    this.props.switchBtn({isDisabled: true});
                }
              },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
            }),
        };

        return (
            <Table loading={this.props.isLoadingDetail} rowSelection={rowSelection} columns={cols} dataSource
            ={this.props.data} />
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.detail.data || [],
        isLoadingDetail: state.detail.isLoadingDetail,
        isDisabled: state.nodes.isDisabled
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        switchBtn: (param) => {
            dispatch(updateAction(param));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CusTable);