import { Container } from 'react-bootstrap';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AppNavBar from './components/AppNavBar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Message from './pages/Message';
import Profile from './pages/Profile';
import AppSidePanel from './components/AppSidePanel';
import AppSidePanelRight from './components/AppSidePanelRight';

function App() {
  return (
    <Container className='app-container'>
      <Router>
        <AppNavBar />
        <Container className='page-container'>
        <AppSidePanel />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/messages' element={<Message />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/*' element={<Error />} />
          </Routes>
          <AppSidePanelRight/>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
