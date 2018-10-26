import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class column extends Component {
    constructor(props) {
        super(props);

        this.getOption = this.getOption.bind(this);
    }
    getOption() {
        return {
            title: {
                text: '整体成熟度趋势'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['刑侦总队', '治安总队', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                areaStyle: {},
                smooth: true
            }]
        };
    }
    onChartReadyCallBack() {

    }
    onChartClick(param) {
        console.log(param);
    }
    onEvents = {
        'click': this.onChartClick
    }
    render() {
        return (
        <ReactEcharts 
            option={this.getOption()} 
            notMerge={true}
            lazyUpdate={true}
            onEvents={this.onEvents}
            theme={'theme_name'}
            onChartReady={this.onChartReadyCallBack}
            />
        );
    }
}; 

export default column;