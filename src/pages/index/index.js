import React, {Component} from 'react'
import { Line, Pie, ContentBox, Empty, Header, ListBox, HeaderTitle, HeaderText } from "@/components/"
import {getData, getApi} from "@/services/cw";
import {formatTime} from "../../utils/func";

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        center_dw: [],
        center_hd: [],
        center_js: [],
        center_cp_left: [],
        center_cp_right: [],


        left_ts: {},
        left_zyz: [],

        right_js: [],
        right_sj: []
      },

      time: ['20171231', '20181231', '20191231', '20200531'],
      areaCodes: [],
      centerData: {
        center_ds: [],
        center_gr: [],
        center_dz: [],
        total: "",
        ds_list: []
      },
      pieData: [
        {
          update_cycle: "年",
          total: "20%",
          areaCode: "普洱市",
          m_unit: "个",
          cw_type: "全市新时代文明实践所个数",
          indicatorCycle: "20191231",
        },
        {
          update_cycle: "年",
          total: "10%",
          areaCode: "普洱市",
          m_unit: "个",
          cw_type: "全市新时代文明实践中心个数",
          indicatorCycle: "20191231",
        },
        {
          update_cycle: "年",
          total: "15%",
          areaCode: "普洱市",
          m_unit: "个",
          cw_type: "全市新时代文明实践站个数",
          indicatorCycle: "20191231",
        },
        {
          update_cycle: "年",
          total: "20%",
          areaCode: "普洱市",
          m_unit: "个",
          cw_type: "全市新时代文明实践站个数",
          indicatorCycle: "20191231",
        },
        {
          update_cycle: "年",
          total: "35%",
          areaCode: "普洱市",
          m_unit: "个",
          cw_type: "全市新时代文明实践站个数",
          indicatorCycle: "20191231",
        }
      ]
    }

  }

  initData = () => {
    Promise.all([this.getTSData()]).then((data) => {
      this.setState({
        data: {
          center_dw: [],
          center_hd: [],
          center_js: [],
          center_cp_left: [],
          center_cp_right: [],

          left_ts: {},
          left_zyz: [],

          right_js: [],
          right_sj: []
        },
        center_ds: {},
        center_gr: {},
        center_dz: {}
      }, () => {
        this.getTSResult(data[1] || []);
      })
    })
  }

  getTSData = () => {
    const {areaCodes} = this.state;

    return new Promise((resolve, reject) => {
      getData({
        indicatorCycles: ['2020', '2019', '2018', '2017'],
        areaCodes: areaCodes, // 530800000000 530801000000
        cw_type: "市创文办投诉处理件数（2018年起）"
      }).then(res => {
        const {data} = res || {};

        resolve(data || [])

      }).catch(err => {
        resolve([])
      });

    });
  }


  // 处理投诉数据
  getTSResult = (data) => {
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


    this.setState({
      data: {
        ...this.state.data,
        left_ts: ts_data
      }
    });
  }

  componentDidMount() {
    // 隐藏头部预警
    window.Cockpit && window.Cockpit.showHeaderIndex(false);

    // 获取链接上的areaCodes
    let areaCode = '', areaCodes = [];
    if (/areaCode=([0-9a-zA-Z]+)/.test(location.href)) {
      areaCode = RegExp.$1;
    }

    if (areaCode && areaCode != 'null') {
      // 如果是普洱市，请求所有全市的数据，否则请求当前对应的区域数据
      if (areaCode === '530800000000') {
        areaCodes = ['530800000000', '530801000000'];
      } else {
        areaCodes = [areaCode];
      }
    } else {
      areaCodes = ['530800000000', '530801000000'];
    }

    this.setState({
      areaCodes
    }, () => {
      this.initData();
    });


  }

  componentWillUnmount() {
  }

  render () {
    const {data} = this.state;
    return <div>
      <div className="stopping-page">

        {/*左边部分*/}
        <div className="stopping-left">

          {/*左上1*/}
          <div className="stopping-left-top">
            <HeaderText text="停车场使用统计"/>
            <ContentBox className='top-statistics-content'>
              <div className="statistics-content-item">
                <span>停车场总车位数</span>
                <span>1000</span>
              </div>
              <div className="statistics-content-item">
                <span>停车场总车位数</span>
                <span>1000</span>
              </div>
            </ContentBox>
          </div>

          {/*左中*/}

          <div className='stopping-left-center'>
            <HeaderText text="导流指示牌"/>
            <ContentBox className='top-statistics-content'>
              {/*listbox*/}
            </ContentBox>
          </div>

          {/*左下*/}

          <div className='stopping-left-bottom'>
            <HeaderText text="停车时长区间统计"/>
            <ContentBox className='bottom-pie'>
              <span>停车时长（单位：小时）</span>
              <Pie className="" data={this.state.pieData}/>
            </ContentBox>
          </div>
        </div>


        {/*中间部分*/}

        <div class="stopping-center">
          {/*地图*/}
          <div className='center-map'></div>

          {/*折线图*/}
          <div>
            <HeaderText text=""/>
            <ContentBox className="european-left-ts mt-10">
              <div className="european-left-chart-header">
                <div className="chart-header-left chart-header">
                  <div className="chart-header-title">累计处理件数</div>
                  <div className="chart-header-left-content">
                    {data && data.left_ts && data.left_ts.total}
                    <span>{data && data.left_ts && data.left_ts.yUnit}</span>
                  </div>
                </div>
                <div className="chart-header-right chart-header">
                  <div className="chart-header-title">
                    更新时间
                  </div>
                  <div className="chart-header-right-content">
                    {formatTime(this.state.time[this.state.time.length - 1])}
                  </div>
                </div>
              </div>
              {
                data && data.left_ts && data.left_ts.xData && data.left_ts.xData.length > 0 ? (
                  <Line className="european-left-chart" data={data && data.left_ts || {}}/>
                ) : <Empty/>
              }

            </ContentBox>
          </div>


        </div>
        {/*右边部分*/}

        <div className="stopping-right">
          <div className="stopping-right-top">
            <HeaderText text="区域停车次数分布"/>
            {/*<ListBox/>*/}
          </div>


        </div>

      </div>
    </div>
  }
}

export default Index