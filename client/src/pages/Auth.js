import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: window.innerHeight - 54,
      }}
    >
      <Card style={{ width: 600, padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h1>
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Form.Control
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email..."
          />

          <Form.Control
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите ваш passwor..."
          />
          <Row
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: ' 20px',
            }}
          >
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</Link>
              </div>
            ) : (
              <div>
                Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите!</Link>
              </div>
            )}
            <Button onClick={click} variant={'outline-success'}>
              {isLogin ? 'Войдите' : 'Зарегистрируйтесь'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
