import React, {Component}from 'react';
import { ContentBox } from '../index'
import './index.styl'

import {TopImg, DownImg} from '@/assets/images';


class ListBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isActive: 0
    }
  }

  contentRight = (props) => {
    return (
      <div>

      </div>
    )
  }

  contentLeft = (props) => {
    return (
      <div>

      </div>
    )
  }

  onChange = (index) => {
    console.log(index)
    this.setState({isActive: index})
  }


  render () {
    const { isActive } = this.state
    const { data, headerClass, isShowIndex } = this.props
    return (
      data.map((item, index) => (
        <div className="collapse">
          <div className={ headerClass } onClick={() => this.onChange(index)}>
            {isShowIndex?<span>{ index }</span>:null}
            <span>{item.title}</span>
            <span>{item.extra}</span>
          </div>
          {isActive == index ?<content data={item.content}/> : null}
        </div>
      ))

    );
  }
}

export default ListBox