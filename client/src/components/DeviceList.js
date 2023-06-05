import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  console.log('deviceSHOP:', device);

  return (
    <Row style={{ gap: '65px', marginTop: '100px' }}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});
export default DeviceList;