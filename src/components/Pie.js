import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class pie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opts: {}
        }

        this.getOption = this.getOption.bind(this);
        this.onChartClick = this.onChartClick.bind(this);
    }
    getOption() {
        const data = {
            legendData: ['优', '良', '差', '未评估'],
            seriesData: [
                { name: '优', value: '43' },
                { name: '良', value: '22' },
                { name: '差', value: '34' },
                { name: '未评估', value: '12' }
            ],
            selected: {
                '优': true,
                '良': true,
                '差': true,
                '未评估': true
            }
        };
        return {
            title : {
                text: '成熟度分布情况',
                subtext: '',
                x:'center',
                textStyle: {
                    color: '#404040',
                    lineHeight: 50,
                    fontWeight: 'normal',
                    fontSize: '16',
                    top: '10px'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: data.legendData,
                selected: data.selected
            },
            series : [
                {
                    name: '等级',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: data.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
            onEvents={this.onEvents}
            option={this.getOption()} 
            notMerge={true}
            lazyUpdate={true}
            theme={'theme_name'}
            onChartReady={this.onChartReadyCallBack}
            />
        );
    }
}; 

export default pie;