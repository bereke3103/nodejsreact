import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';
const TypeBar = observer(() => {
  const { device } = useContext(Context);
  console.log('devicedevicedevicedevice', device.types);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedtype(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
