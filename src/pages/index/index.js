import React, {Component} from 'react'
import { Line, Pie, ContentBox, Empty, Header, ListBox, HeaderTitle, HeaderText } from "@/components/"
import {getData, getApi} from "@/services/cw";
import {formatTime} from "../../utils/func";

const DATA_MAP = {
  "普洱市中心城区参与创文单位数": "center_dw",
  "普洱市中心城区参与创文小区数": "center_dw",
  "普洱市中心城区创文测评重点点位": "center_dw",
  "普洱市中心城区创文测评固定点位": "center_dw",

  "普洱市中心城区创文主题示范活动次数（2018年起）": "center_hd",
  "普洱市中心城区创文主题示范活动参与人数（2018年起）": "center_hd",
  "普洱市中心城区开展第三方创文问卷、民主测评次数（2018年起）": 'center_hd',

  "普洱市中心城区未成年人校外心理辅导站数目": "center_js",
  "普洱市中心城区社会主义核心价值观主题公园数目": "center_js",
  "普洱市中心城区社会主义核心价值观主题街道数目": "center_js",
  "普洱市中心城区社会主义核心价值观主题广场数目": "center_js",

  "第三方测评全市开展文明城市创建活动知晓率": "center_cp_left",
  "第三方测评群众对创建文明城市的满意率": "center_cp_right",

  // "市创文办投诉处理件数（2018年起）": "left_ts",

  "全市志愿者总人数（2017年起）": "left_zyz",
  "全市学雷锋志愿服务站点数（2017年起）": "left_zyz",
  "全市优秀星级志愿者人数（2017年起）": "left_zyz",
  "全市典型志愿服务项目（活动数）（2017年起）": "left_zyz",
  "全市志愿服务小时数（2017年起）": "left_zyz",

  "全市市级及以上道德模范人数": "right_js",
  "全市市级及以上文明城市数量": "right_js",
  "全市市级及以上文明村数量": "right_js",
  "全市市级及以上文明单位数量": "right_js",
  "全市市级及以上文明校园数量": "right_js",
  "全市市级及以上文明家庭数量": "right_js",
  "全市新时代农民讲习所数目": "right_js",
  "全市乡村学校少年宫数目": "right_js",

  // "全市新时代文明实践中心（所、站）数": "right_sj"
  "全市新时代文明实践中心个数": "right_sj",
  "全市新时代文明实践所个数": "right_sj",
  "全市新时代文明实践站个数": "right_sj",

  // 创文督办
  "劝导不文明遛狗行为": "center_ds",
  "捕获流浪狗": "center_ds",
  "劝导不文明交通行为": "center_ds",
  "制止乱张贴小广告行为": "center_ds",
  "劝导公共场所吸烟": "center_ds",
  "制止劝导乱丢烟头": "center_ds",
  "制止其他不文明行为": "center_ds",
  "口头宣传": "center_ds",
  "清理小广告": "center_ds",

  // 工作人员
  "工作人员": "center_gr",

  // 督查专报
  "督查专报": "center_dz"
};

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
          <ContentBox className='center-statistics-content mt-20' text="导流指示牌" isShowHeader={true}>
            {/*listbox*/}
          </ContentBox>


          {/*左下*/}
          <ContentBox className='bottom-pie mt-20' isShowHeader={true} text='停车时长区间统计'>
            <span>停车时长（单位：小时）</span>
            <Pie />
          </ContentBox>

        </div>


        {/*中间部分*/}

        <div class="ml-20">

          <ContentBox className='middle-map-content'>
            {/*地图*/}
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
            <ContentBox text="区域停车次数分布" isShowHeader={true} className='right-stopping-time'>
              {/*<ListBox/>*/}
            </ContentBox>

            <ContentBox text="区域停车次数分布" isShowHeader={true} className='right-stopping-duration mt-20'>

            </ContentBox>


        </div>

      </div>
    </div>
  }
}

export default Index