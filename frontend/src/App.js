import logo from './logo.svg';
import './App.css';
import { Login } from './Components/LoginPage/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { signup } from './Components/SignUpPage/signup';
import {Home} from './Components/Landing_Page/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Login/> */}
        <Routes>
          {/* Routes are here */}
          <Route path='/' Component={Login}></Route>
          <Route path='/signup' Component={signup}></Route>
          <Route path='/home' Component={Home}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
