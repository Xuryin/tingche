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
    const { data, headerClass, isShowIndex, position } = this.props

    return (
      data.map((item, index) => (
        <div className="collapse">

        </div>
      ))

    );
  }
}

export default ListBox