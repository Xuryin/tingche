import React, { Component, Fragment } from 'react';
import {getUUID, px2spx} from "../../utils/func";
import echarts from '../../utils/echarts'
import { Empty } from '@/components';

import './index.styl';

class Pie extends Component {
  constructor(props) {
    super(props);

    this.id = 'gauge' + getUUID();
    this.options = {
      title:{
        text: '停车时长（单位：小时）',
        left: 'center',
        top: 10,
        textStyle: {
          fontSize: 12,
          color: '#FFFFFF'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{c}%'
      },
      legend: {
        icon: 'circle',
        bottom: 0,
        itemWidth: 10,
        itemGap: 5,
        textStyle: {
          fontWeight: 100,
          fontSize: 10,
          color: '#303d62'
        }
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '55%',
          label: {
            show: false
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
          }
        }
      ]
    };
  }

  init = () =>{

    this.options.series[0].data = [
      {name:'0-0.5',value:5},
      {name:'0.5-1.5',value:38},
      {name:'1.5-3',value:10},
      {name:'3-5',value:45},
      {name:'5以上',value:23}
    ]
    this.options.legend.data = ['0-0.5','0.5-1.5','1.5-3','3-5','5以上']
    console.log(this.options)
    this.renderPie();
  }

  renderPie = () => {
    this.pieChart && this.pieChart.setOption(this.options);
  }

  render() {
    const { className } = this.props;


    return(
      <div id={this.id} className={className} style={{width:'250px',height:'150px'}}></div>
    );
  }

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    this.pieChart = echarts.getInstanceByDom(document.getElementById(this.id));
    if( this.pieChart === undefined){
      this.pieChart = echarts.init(document.getElementById(this.id));
    }
    // this.init(this.props.data);
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;

    // this.init(data);
    this.init();
  }
}

export default Pie;