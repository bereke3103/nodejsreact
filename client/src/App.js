import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBarMenu from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from '../src/http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return <Spinner animation={'grow'} />;
  }

  return (
    <BrowserRouter>
      <NavBarMenu />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
