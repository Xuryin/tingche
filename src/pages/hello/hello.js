import React, { Component } from 'react';
import imgurl1 from '@/assets/images/1.jpg'
import imgurl2 from '@/assets/images/2.jpg'
import imgurl3 from '@/assets/images/3.jpg'
import imgurl4 from '@/assets/images/4.jpg'
import { getIndicator } from '@/services/hello'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idx:0,
      imgurl: ''
    }
    setInterval(this.imgTime, 3000)

  }
  componentDidUpdate() {

  }

  imgTime=()=> {
    let idx = this.state.idx
    let imgs = [imgurl1, imgurl2, imgurl3, imgurl4]
    idx++;
    if (idx > 4) {
      idx = 1
    }

    this.setState({ imgurl: imgs[idx - 1],idx }, () => {})
  }

  render() {
    return <div>
      <img className='img' src={this.state.imgurl}></img>
    </div>
  }
}

export default Hello
