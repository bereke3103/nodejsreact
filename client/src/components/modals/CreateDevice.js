import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый девайс
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '33px',
        }}
      >
        <Dropdown>
          <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map((type) => (
              <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map((brand) => (
              <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control placeholder={'Введите название устройство'} />
        <Form.Control
          type="number"
          placeholder={'Введите стоимость устройство'}
        />
        <Form.Control type="file" placeholder={'Введите название устройство'} />
        <hr />
        <Button
          variant="outline-dark"
          style={{ marginTop: '-65px' }}
          onClick={addInfo}
        >
          Добавить новое устройство
        </Button>

        {info.map((i) => (
          <Row key={i.number}>
            <Col md={4}>
              <Form.Control placeholder="Введите название устройства " />
            </Col>
            <Col md={4}>
              <Form.Control placeholder="Введите описание устройства " />
            </Col>
            <Col md={4}>
              <Button
                onClick={() => removeInfo(i.number)}
                variant="outline-danger"
              >
                Удалить
              </Button>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
