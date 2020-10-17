import React, {Component}from 'react';
import { ContentBox } from '../index'

import { Collapse } from 'antd';
import "antd/dist/antd.css";
import {down, top} from '@/assets/images';

const { Panel } = Collapse;

class ListBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: [
        {title: '导流指示牌', content: '1.A1001,普洱市向东50米'},
        {title: '故障树', content: '1.A1001,普洱市向东50米'},
        {title: '导流指示牌', content: '1.A1001,普洱市向东50米'},
      ]
    }
  }

  render () {

    const { data } = this.state
    console.log(data)
    return (
      <div className='collapse-content'>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            { data[0].content }
          </Panel>
          <Panel header="This is panel header 2" key="2">
            { data[0].content }
          </Panel>
          <Panel header="This is panel header 3" key="3">
            { data[0].content }
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default ListBox