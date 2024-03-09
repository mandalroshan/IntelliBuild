import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { router } from './components/Router/router';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Login</Link>
     <router/>
    </BrowserRouter>
  );
}

export default App;
