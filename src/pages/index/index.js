import React, {Component} from 'react'
import { Line, Pie, ContentBox, Empty, Header, ListBox, HeaderTitle, HeaderText,WebMap } from "@/components/"
import {getData, getApi} from "@/services/cw";
import {formatTime} from "../../utils/func";

const LineData  = [
  {update_cycle: "年",
    total: "852",
    areaCode: "普洱市",
    m_unit: "件",
    cw_type: "市创文办投诉处理件数（2018年起）",
    indicatorCycle: "2020"},
  {
    m_unit: "件",
    cw_type: "市创文办投诉处理件数（2018年起）",
    indicatorCycle: "2020",
    update_cycle: "年",
    total: "60",
    areaCode: "普洱市"
  },
  {
    update_cycle: "年",
    total: "199",
    areaCode: "普洱市",
    m_unit: "件",
    cw_type: "市创文办投诉处理件数（2018年起）",
    indicatorCycle: "2019",
  },
  {
    update_cycle: "年",
    total: "282",
    areaCode: "普洱市",
    m_unit: "件",
    cw_type: "市创文办投诉处理件数（2018年起）",
    indicatorCycle: "2018"
  },
  {
    update_cycle: "年",
    total: "255",
    areaCode: "普洱市",
    m_unit: "件",
    cw_type: "市创文办投诉处理件数（2018年起）",
    indicatorCycle: "2017"
  }
]

const StoppingTime = [
  {title: '导流指示牌', content: '1.A1001,普洱市向东50米'},
  {title: '故障树', content: '1.A1001,普洱市向东50米'},
  {title: '导流指示牌', content: '1.A1001,普洱市向东50米'},
]

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

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
    });


  }

  componentWillUnmount() {
  }

  render () {
    const {data} = this.state;
    const position = { longitude: 100.964001, latitude: 22.792963 }
    return <div>
      <div className="stopping-page">

        {/*左边部分*/}
        <div className="stopping-left">

          {/*左上1*/}
          <ContentBox className='top-statistics-content' text='交通指数'  childrenClass="content-box-content" isShowHeader={true}>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
            <div className="statistics-content-item">
              <span>1000</span>
              <span>停车场总车位数</span>
            </div>
          </ContentBox>

          {/*左中*/}
          <ContentBox className='center-statistics-content mt-20' text="导流指示牌" isShowHeader={true} childrenClass='center-collapse'>
            <ListBox className='statistics-collapse' data={StoppingTime}>
              <div childrenClass='stopping-collapse-children'></div>
            </ListBox>
          </ContentBox>


          {/*左下*/}
          <ContentBox className='bottom-pie mt-20' isShowHeader={true} text='停车时长区间统计'>
            {/*<span>停车时长（单位：小时）</span>*/}
            <Pie />
          </ContentBox>

        </div>


        {/*中间部分*/}

        <div class="stopping-center ml-20">
          {/*地图*/}

          <ContentBox className='middle-map-content'>
            {/*地图*/}
            <WebMap />
          </ContentBox>


          {/*折线图*/}
          <ContentBox className="center-line mt-20">
            <div className='center-line-content'>
              <Line className='center-line-line' data={LineData}/>
              <Line className='center-line-line' data={LineData}/>
            </div>
          </ContentBox>
        </div>


        {/*右边部分*/}

        <div className="ml-20">
          <ContentBox text="区域停车次数分布" isShowHeader={true} className='right-stopping-time' childrenClass='right-collapse'>
            <ListBox className='stopping-collapse' data={StoppingTime} >
            </ListBox>
          </ContentBox>

          <ContentBox text="区域停车次数分布" isShowHeader={true} className='right-stopping-duration mt-20'>

          </ContentBox>


        </div>

      </div>
    </div>
  }
}

export default Index