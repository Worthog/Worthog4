import React, { Component } from 'react';
import DeviceListItem from './DeviceListItem';

class DeviceList extends Component {
  render() {
    const { devices } = this.props;
    return (
      <div>
        {devices && devices.map(device => (
          <DeviceListItem
            key={device.id}
            device={device}            
          />
        ))}
      </div>
    );
  }
}

export default DeviceList;
