import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< Updated upstream
import { signup } from './Components/SignUpPage/signup';
import {Home, SideBar} from './Components/Landing_Page/home';
import { RegisterClick } from './Components/RegisterPage/registerClick';
=======
import {Home} from './Components/Landing_Page/home';
import LoginPage from './Components/login/login';
import SignUpPage from './Components/SignUpPage/signup';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Login/> */}
        
        <Routes>
          {/* Routes are here */}
<<<<<<< Updated upstream
          <Route path='*' Component={Login}></Route>
          <Route path='/signup' Component={signup}></Route>
          <Route path='/home' Component={SideBar}></Route>
          <Route path='/registration' Component={RegisterClick}></Route>
=======
          <Route path='/' Component={LoginPage}></Route>
          <Route path='/signup' Component={SignUpPage}></Route>
          {/* <Route path='/home' Component={Home}></Route> */}
>>>>>>> Stashed changes

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
