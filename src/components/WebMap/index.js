import React, { Component } from 'react';
import './index.styl';
import { Map, Marker } from 'react-amap';


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
        icon: '',
        label:{content:'机场停车场',offset:(-50,-50)}
      },
      {
        position: {longitude: 100.977972, latitude: 22.777834},
        icon: '',
        label:{content:'阳光悦城',offset:(-50,-50)}
      },
    ]
    return (
      <Map mapStyle={'blue_night'} zoom={12} amapkey={'7f16b9b671454d89e24e566e6db300b9'}>
        {markerList.map((item, index) => {
          return <Marker position={item.position} icon={item.icon} label={item.label}/>
        })
        }
      </Map>
    );
  }

}

export default WebMap;