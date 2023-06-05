import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const NavBarMenu = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ color: 'white' }}>
            Купи девайс
          </Link>
          {user._isAuth ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button
                variant={'outline-light'}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
              <Button
                variant={'outline-light'}
                style={{ marginLeft: '10px' }}
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button
                variant={'outline-light'}
                onClick={() => navigate(LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBarMenu;
