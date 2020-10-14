import React, {Component} from 'react'
import { Line, Pie, ContentBox, Empty, Header, ListBox, HeaderTitle, HeaderText } from "@/components/"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidUpdate () {

  }


  render() {
    return <div>
      <div className="stopping-page">

        {/*左边部分*/}
        <div className="stopping-left">

          {/*左上1*/}
          <div className="stopping-left-top">
            <HeaderText text="停车场使用统计"/>
          </div>

        </div>


        {/*中间部分*/}
        {/*右边部分*/}

      </div>
    </div>
  }
}

export default Index