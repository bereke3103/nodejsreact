import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  console.log('device.brands:', device.brands);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        flexWrap: 'wrap',
      }}
    >
      {device.brands.map((brand) => (
        <Card
          border={brand.id === device.selectedBrand.id ? 'danger' : 'grey'}
          onClick={() => device.setSelectedbrand(brand)}
          style={{ padding: '10px', cursor: 'pointer' }}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
