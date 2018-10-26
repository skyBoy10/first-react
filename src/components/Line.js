import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class line extends Component {
    constructor(props) {
        super(props);

        this.getOption = this.getOption.bind(this);
    }
    getOption() {
        const data = {
            legendData: [
                '优秀',
                '良',
                '差',
                '未评估'
            ],
            seriesData: [
                {
                    name:'优秀',
                    type:'line',
                    stack: '优秀',
                    smooth: true,
                    areaStyle: {},
                    data:[
                        ['2018-10-24', 220],
                        ['2018-10-25', 120],
                        ['2018-10-26', 187],
                        ['2018-10-27', 165],
                        ['2018-10-28', 190],
                        ['2018-10-29', 200],
                        ['2018-10-30', 210]
                    ]
                },
                {
                    name:'良',
                    type:'line',
                    stack: '良',
                    smooth: true,
                    areaStyle: {},
                    data:[
                        ['2018-10-24', 100],
                        ['2018-10-25', 120],
                        ['2018-10-26', 187],
                        ['2018-10-27', 205],
                        ['2018-10-28', 123],
                        ['2018-10-29', 198],
                        ['2018-10-30', 129]
                    ]
                },
                {
                    name:'差',
                    type:'line',
                    stack: '差',
                    smooth: true,
                    areaStyle: {},
                    data:[
                        ['2018-10-24', 123],
                        ['2018-10-25', 112],
                        ['2018-10-26', 89],
                        ['2018-10-27', 120],
                        ['2018-10-28', 112],
                        ['2018-10-29', 98],
                        ['2018-10-30', 170]
                    ]
                },
                {
                    name:'未评估',
                    type:'line',
                    stack: '未评估',
                    smooth: true,
                    areaStyle: {},
                    data:[
                        ['2018-10-24', 101],
                        ['2018-10-25', 73],
                        ['2018-10-26', 118],
                        ['2018-10-27', 180],
                        ['2018-10-28', 149],
                        ['2018-10-29', 160],
                        ['2018-10-30', 123]
                    ]
                },     
            ]
        };
        return {
            title: {
                text: '整体成熟度趋势',
                textStyle: {
                    color: '#404040',
                    lineHeight: 50,
                    fontWeight: 'normal'
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: data.legendData
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'time',
                boundaryGap: false,
                minInterval: 3600 * 24 * 1000,
            },
            yAxis: {
                name: '个数',
                type: 'value'
            },
            series: data.seriesData
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

export default line;