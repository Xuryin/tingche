import React, {Component} from 'react';
import './index.styl';
import { Modal } from 'antd';
import "antd/dist/antd.css";

function Table (props) {
  console.log(props)
  const title = '标题', number = '48'
  return (
    <>
      <div class="modal-table-title">
        {/*<img src={imgUrl} alt=""/>*/}
        <span>{title}</span>
      </div>
      <div class="modal-table-content">
        <div className="table-content-title">
          <span>区域</span>
          <span>社区</span>
          <span>日期</span>
          <span>劝导数量 <span className="title-per">(1234起)</span> </span>
        </div>
        <div className="table-content-content">
          <div className='table-content-item'>
            <span>201111</span>
            <span>思茅区区政府</span>
            <span>思茅区区政府</span>
            <span>26</span>
          </div>
        </div>
      </div>
    </>
  )
}


class Quota extends Component {
  constructor (props) {
    super (props)
    this.state = { visible: false, top: '200px' };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render () {
    const { visible } = this.state
    const title = '标题', number = '48'
    return (
      <>
        <div onClick={this.showModal} className='incident-item'>
          <div className='incident-item-img'>
            {/*<img src={imgUrl} alt=""/>*/}
          </div>
          <div className='incident-item-content'>
            <span>{title}</span>
            <span>{number} <span className='incident-per'>起</span> </span>
          </div>
        </div>

        <Modal
          width={'730px'}
          footer={null}
          style={{ top: '150px' }}
          bodyStyle={{ height: '484px',background: 'rgba(5,49,115,0.97)',
            boxShadow: 'inset 0 0 11px 0 rgba(8,130,255,0.54)'}}
          centerd
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Table data={this.props.data}/>
        </Modal>
      </>
    )
  }

  componentDidMount () {
    console.log(this.state)
  }

}

export default Quota