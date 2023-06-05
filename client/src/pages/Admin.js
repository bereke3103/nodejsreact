import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <div
      style={{
        width: 1300,
        margin: '0 auto',
        width: '1300px',
        margin: '0px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        marginTop: '150px',
      }}
    >
      <Button
        onClick={() => setTypeVisible(true)}
        variant={'outline-dark'}
        style={{ padding: 15 }}
      >
        Добавить тип
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={'outline-dark'}
        style={{ padding: 15 }}
      >
        Добавить бренд
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={'outline-dark'}
        style={{ padding: 15 }}
      >
        Добавить устройство
      </Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </div>
  );
};

export default Admin;
