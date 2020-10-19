import React, { Component } from 'react';
import './index.styl';
import { Map, Marker } from 'react-amap';
import { green, red, gray } from '../../assets/images';



class WebMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  render() {
    const markerList = [
      {
        position: {longitude: 100.964001, latitude: 22.792963},
        icon: green,
        label:{content:'',offset:-50}
      },
      {
        position: {longitude: 100.977972, latitude: 22.777834},
        icon: red,
        label:{content:'',offset: (100,100)}
      },
    ]

    return (
      <div className='map-content'>
        <Map mapStyle={'amap://styles/9664a559418bc440212f0e6871459776'} zoom={13} amapkey={'7f16b9b671454d89e24e566e6db300b9'}>
          {markerList.map((item, index) => {
            return <Marker position={item.position} icon={item.icon} label={item.label}/>
          })
          }
        </Map>
      </div>

    );
  }

}

export default WebMap;