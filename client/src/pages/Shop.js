import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchDevice, fetchTypes } from '../http/deviceAPI';

const Shop = observer(() => {
  const { device } = useContext(Context);
  console.log('device.setBrands.row:', device.devices);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevice().then((data) => device.setBrands(data));
  }, []);
  return (
    <Container>
      <Row style={{ marginTop: '50px' }}>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
