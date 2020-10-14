import React, { Component, Fragment } from 'react';
import {getUUID, px2spx} from "../../../utils/func";
import echarts from 'echarts/lib/echarts'
import { Empty } from '@/components';

import './index.styl';

const TEXT_MAP = {
  "全市新时代文明实践中心个数": "实践中心",
  "全市新时代文明实践所个数": "实践所",
  "全市新时代文明实践站个数": "实践站"
};

class Pie extends Component {
  constructor(props) {
    super(props);

    this.id = 'gauge' + getUUID();
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      grid: {
        bottom: '20%',   
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        left: 'center',
        bottom: 'bottom',
        itemHeight: px2spx(12),     // 圆圈大小
        itemWidth: px2spx(12),
        itemGap: px2spx(37),   // 间距
        padding: [40, 0, 0, 0],
        textStyle: {
          fontFamily: "HiraginoSansGB-W3",
          fontSize: px2spx(14),
          color: "#C9CCF1"
        },
        data: []
        /**
         * {
          name: '实践站',
          icon: "circle"
        }
        */
      },
      
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          silent: false,   // 是否有鼠标交互
          label: {
            // normal: {
            //   show: true,
            //   formatter: "{d}个",
            //   textStyle: {
            //     fontSize: px2spx(14),
            //     color: "#fff"
            //   },
            // },
          },
          labelLine: {  // 线的样式
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.8,
              length: px2spx(10),
            }
          },
          data: [],
          hoverOffset: 2,
          // {value: 335, name: '实践站'}
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          itemStyle: {
            normal: {
              // 设置饼图的颜色
              color: function(params){
                let colors = ['#19D6FF', '#F1D43B', '#F2845F'];
                return colors[params.dataIndex];
              }
            },
          }
        }
      ]
    };
  }

  init = (data) => {
    if(data && data.length > 0) {
      let legendData = [], pieData = [], m_unit = data[0].m_unit;

      data.forEach(item => {
        legendData.push({
          name: TEXT_MAP[item.cw_type] || '-',
          icon: 'circle'
        });

        pieData.push({
          name: TEXT_MAP[item.cw_type] || '-',
          value: item.total
        });
      });

      this.options.legend.data = legendData;
      this.options.series[0].data = pieData;
      this.options.series[0].label = {
        normal: {
          show: true,
          formatter: (data) => {
            // `{c}${m_unit}`
            return data.name + data.value + m_unit
          },
          textStyle: {
            fontSize: px2spx(14),
            color: "#fff"
          },
        },
      };


      this.renderPie();
    }
  }

  renderPie = () => {

    this.pieChart && this.pieChart.setOption(this.options);
  }

  render() {
    const { className, data } = this.props;

    return(
      <div id={this.id} className={className}></div>
    );
  }

  componentDidMount() {
    this.pieChart = echarts.init(document.getElementById(this.id));

    this.init(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;

    this.init(data);
  }
}

export default Pie;