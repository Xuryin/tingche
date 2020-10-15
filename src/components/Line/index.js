import React, { Component } from 'react';
import {getUUID, px2spx} from "../../utils/func";
import echarts from 'echarts/lib/echarts'

import './index.styl';

class Line extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.id = 'gauge' + getUUID();
    this.options = {
      grid: {  
        left: px2spx(10),   //图表距边框的距离
        right: px2spx(60),
        top: px2spx(60),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '单位/件',
        nameTextStyle: {
          fontSize: px2spx(12),
          color: '#CBDEF4'
        },
        axisLabel: {
          textStyle: {
            fontFamily: 'HiraginoSansGB-W3',
            fontSize: px2spx(12),
            color: '#CBDEF4'
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#091C6A",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {
          show: false
        },
        // ['2015', '2016', '2017', '2018', '2019', '2010']
        data: []
      },
      yAxis: [{
        type: 'value',
        name: "单位/年",
        nameTextStyle: {
          fontSize: px2spx(12),
          color: '#CBDEF4'
        },
        axisLabel: {  // 单位／件 的颜色设置
          textStyle: {
            margin: 15,
            fontFamily: 'HiraginoSansGB-W3',
            fontSize: px2spx(12),
            color: '#CBDEF4'
          },
        },
        axisLine: { // 坐标轴线显示和样式配置
          show: false,
          lineStyle: {
            color: "#091C6A",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {  // 图标分割线显示和样式配置
          show: true,
          lineStyle: {
            color: "#091C6A",
          }
        }
      }],
      series: [{
        // [820, 932, 901, 934, 1290, 30]
        data: [],
        type: 'line',
        symbol: 'diamond',//拐点样式
        symbolSize: 8,//拐点大小
        smooth: true,
        itemStyle : {  
          normal : {  
            label: {
              show: true,        // 节点展示数据
              textStyle: {
                fontSize: px2spx(16)
              }
            },
            color:'#2AE4EF',    // 拐点颜色
            lineStyle:{
              width:2,          // 线宽度
              color:'#2AE4EF'   // 线颜色
            }  
          }  
        },
      }]
    };

  }

  init = (data) => {
    console.log(data)

    let ts_data = {
      xData: [],
      yData: [],
      total: 0,
      xUnit: '',
      yUnit: ''
    };

    (data || []).forEach(item => {
      ts_data.xData.push(item.indicatorCycle);
      ts_data.yData.push(parseInt(item.total));
      ts_data.total += parseInt(item.total);
    });
    ts_data.xData = ts_data.xData.reverse();
    ts_data.yData = ts_data.yData.reverse();
    ts_data.xUnit = data && data[0] && data[0].update_cycle;
    ts_data.yUnit = data && data[0] && data[0].m_unit;

    const { xData, yData, xUnit, yUnit } = ts_data || {};

    this.options.xAxis.data = xData;
    this.options.series[0].data = yData;
    this.options.xAxis.name = `单位/${xUnit || ''}`;
    this.options.yAxis[0].name = `单位/${yUnit || ''}`;
    console.log(this.options)
    this.renderLine();
  }

  renderLine = () => {

    
    this.lineChart && this.lineChart.setOption(this.options);
  }

  render() {
    const { className } = this.props;

    return(
      <div id={this.id} className={className}></div>
    );
  }

  componentDidMount() {
    this.lineChart = echarts.init(document.getElementById(this.id));

    this.init(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps.data);
  }
}

export default Line;