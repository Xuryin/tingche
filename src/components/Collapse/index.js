import React, { Component } from 'react';
import './index.styl';
import {DownImg, TopImg} from "../../assets/images";

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: []
    }
  }

  onChange = (index) => {
    const { data } = this.props
    let isActive = []

    if ( isActive[index] == index ) {
      data.forEach((item, index) => {
        isActive.push( data.length+1 )
      })
      console.log(isActive)
    } else {
      isActive[index] = index
    }
    this.setState({
      isActive: isActive
    }, () => {
      console.log(this.state.isActive)
    })
  }

  componentDidMount() {
    /*const { data } = this.props
    const { isActive } = this.state
    data.forEach((item, index) => {
      isActive.push(data.length + 1)
    })*/
  }


  render() {
    const { data } = this.props
    const { isActive } = this.state

    return (

      <div className='collapse-content'>
        {data.map((item, index) => (
          <div>
            <div className='collapse-header' onClick={() => this.onChange(index)}>
              <span>{item.title}</span>
              <span className='collapse-extra'>{item.extra}</span>
              {isActive[index] == index? <DownImg /> : <TopImg/>}
            </div>
            {isActive[index] == index ? <Direction data={item}/> : null}
          </div>
        ))}
      </div>
    );
  }
}

const Direction = (props) => {
  return <div className='collapse-content-direction'>
    <p>1、A10001，普洱市XX路向东50米</p>
    <p>导流信息</p>
    <p>XX停车场车位已满</p>
  </div>
}

const Malfunction = () => {
  return <div className='collapse-content-malfunction'>
    <p>1、A10001，普洱市XX路向东50米</p>
    <p>1、A10001，普洱市XX路向东50米</p>
  </div>
}




export default Collapse;