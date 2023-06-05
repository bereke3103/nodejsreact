import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 36000,
    rating: 5,
    img: 'https://files.foxtrot.com.ua/PhotoNew/img_0_60_8717_0_1_637928770762958295.jpg',
  };

  const description = [
    { id: 1, title: 'Оперативная память', description: '5гб' },
    { id: 2, title: 'Камера', description: '12 мп' },
    { id: 3, title: 'Оперативная память', description: 'Пентиум 3' },
    { id: 4, title: 'Процессор', description: 'Пентиум 33' },
    { id: 5, title: 'Кол-во ядер', description: '5гб' },
    { id: 6, title: 'Аккумулятор', description: '5гб' },
  ];

  return (
    <Container style={{ marginTop: 100, display: 'flex' }}>
      <div>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>

        <div>
          <Col md={4}>
            <h2 style={{ marginLeft: '51px', marginTop: '22px' }}>
              {device.name}
            </h2>
            <h4 style={{ marginLeft: '50px', marginTop: '22px' }}>
              Рейтинг: {device.rating}
            </h4>
          </Col>
          <Col md={4} style={{ marginLeft: '53px', marginTop: '34px' }}>
            <h3>{device.price} тг.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Col>
        </div>
        <Row style={{ marginTop: '59px' }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            molestias dolore ipsam harum. Voluptas similique iure fugit,
            repellendus sint amet quis aliquam beatae ratione ipsum voluptatum,
            repellat harum cumque ut.
          </p>
          <div
            style={{
              marginLeft: '60px',
              marginTop: '60px',
              marginBottom: '100px',
            }}
          >
            <Row>
              <h1 style={{ marginBottom: 30 }}>Характеристики</h1>
              {description.map((info, index) => (
                <Row
                  key={info.id}
                  style={{
                    background: index % 2 === 0 ? 'lightgray' : 'transparent',
                  }}
                >
                  {info.title}:{' '}
                  <p style={{ fontWeight: 'bold' }}> {info.description}</p>
                </Row>
              ))}
            </Row>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default DevicePage;
