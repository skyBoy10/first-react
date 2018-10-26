import React, { Component } from 'react';
import { Tree, Spin } from 'antd';
import { connect } from 'react-redux';
import nodeAction from '../redux/actions/firstNodes';
import { childAction, getChildNodes } from '../redux/actions/childNodes';
import { detailAction } from '../redux/actions/nodeDetail';

const TreeNode = Tree.TreeNode;

class CusTree extends Component {
    constructor(props) {
        super(props);
        this.props.getNodesData(2, {nodeLevel: 1});

        this.onLoadData = this.onLoadData.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }
    onLoadData(treeNode) {
        if(treeNode.props.children) {
            return;
        }
        
        return getChildNodes(2, {key: treeNode.props.dataRef.key, title: treeNode.props.dataRef.title}).then((res) => {
            this.props.getChildNodes({data: res, nodeInfo: {key: treeNode.props.dataRef.key, title: treeNode.props.dataRef.title}});
        });
    }
    onSelect(key, e) {
        if(e.selected && e.node.props.isLeaf)
        {
            this.props.getDetail(3, e.node.props.dataRef);
        }
    }
    renderTreeNodes(data) {
        if(!data) return;

        return data.map((item) => {
            if(item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }

            return (<TreeNode {...item} dataRef={item} />);
        })
    }
    render() {
        return (
            !this.props.isLoaded ? (<div className='h-full w-full flex-2'><Spin tip="Loading..." /></div>) :
            (
                <Tree loadData={this.onLoadData} onSelect={this.onSelect}>
                    {this.renderTreeNodes(this.props.data.nodes)}
                </Tree>
            )
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.nodes || [],
        isLoaded: state.nodes.isLoaded
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNodesData: (type, params) => {
            dispatch(nodeAction(type, params));
        },
        getChildNodes: (info) => {
            dispatch(childAction(info));
        },
        getDetail: (type, param) => {
            dispatch(detailAction(type, param));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CusTree);