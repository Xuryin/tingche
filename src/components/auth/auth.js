import React, { PureComponent } from 'react';
import fetch from "@/env/fetch";
import { getAuth } from '@/services/auth'

class Authorized extends PureComponent {
  state = {
    token: ''
  }

  //初始化权限
  constructor(props) {
    super(props)
    if (window.Cockpit) {
      window.Cockpit.showHeaderIndex && window.Cockpit.showHeaderIndex(false)
    }
  }


  componentDidMount () {
    const COCKPIT_ID = "swzzb-1251-pc"
    let token = '43ac6e0c5e3862ed4f17964c46f8b185'
    if (/token=([0-9a-zA-Z]+)/.test(location.href)) {
      token = RegExp.$1
    }
    if (/areaCode=([0-9a-zA-Z]+)/.test(location.href)) {
      window["FUPIN_AREACODE"] = RegExp.$1;
    }
    window["FUPIN_AREACODE"] = window["FUPIN_AREACODE"] && window["FUPIN_AREACODE"] !== 'null' ? window["FUPIN_AREACODE"] : '530800000000'
    if (!!~location.href.indexOf('localhost')) {
      token = '43ac6e0c5e3862ed4f17964c46f8b185'
      fetch.defaults.headers.common['token'] = token;
      this.setState({
        token: token
      })
      return
    }
    getAuth({
      token,
      // 驾驶舱编号
      cockpitCode: COCKPIT_ID
    }).then((res) => {
      console.log(res)
      if (res && res.result) {
        const {
          token: cockpitToken
        } = res.result

        // 设置统一的头部变量
        fetch.defaults.headers.common['token'] = cockpitToken;

        this.setState({
          token: cockpitToken
        })

      }
    })

  }

  render () {
    const { children } = this.props;
    const dom = this.state.token !== "" ? children : <div style={{ textAlign: 'center' }}>努力登录中...</div>;
    return dom;
  }
}

export default Authorized;
