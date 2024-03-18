import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, SideBar} from './Components/Landing_Page/home';
import { RegisterClick } from './Components/RegisterPage/registerClick';
import LoginPage from './Components/login/login';
import SignUpPage from './Components/SignUpPage/signup';
import { ChattingWindow } from './Components/Chatting_Page/ChattingWindow/chattingWindow';
import { Deploy_page } from './Components/Deploy_Page/deploy_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Login/> */}
        
        <Routes>
          {/* Routes are here */}
          <Route path='/home' Component={SideBar}></Route>
          <Route path='/registration' Component={RegisterClick}></Route>
          <Route path='/' Component={LoginPage}></Route>
          <Route path='/signup' Component={SignUpPage}></Route>
          <Route path='/chatWindow' Component={ChattingWindow}></Route>
          <Route path='/deploy' Component={Deploy_page}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
