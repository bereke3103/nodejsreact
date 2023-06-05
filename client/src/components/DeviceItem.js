import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  console.log('device:', device);
  return (
    <Col md={3}>
      <Card
        style={{ width: 150, cursor: 'pointer', border: 'grey' }}
        onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
      >
        <Image width={150} height={150} src={device.img} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            marginTop: '15px',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>Samsung...</div>

          <div>
            <div>Рейтинг: {device.rating}</div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
