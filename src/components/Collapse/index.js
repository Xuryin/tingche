import React, { Component } from 'react';
import './index.styl';
import {DownImg, TopImg} from "../../assets/images";

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 0
    }
}

  componentDidMount() {

  }
  render() {
    const { data } = this.props
    const { isActive } = this.state
    return (
      <div className='collapse-content'>
        {data.map((item, index) => (
            <div className='collapse-header'>
              <span>{item.index}</span>
              <span>{item.title}</span>
              <span>{item.extra}</span>
              {}
            </div>
        ))}
      </div>
    );
  }
}


export default Collapse;