import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Jobs from './pages/Jobs/Jobs'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>

    <Routes>
    <Route path = "/Home" element = {<Home/>}></Route>
    <Route path = '/Contact' element = {<Contact/>}></Route>
    <Route path = "/" element = {<Login/>}></Route>
    <Route path = "/jobs" element={<Jobs/>}></Route>
    <Route path = "/About" element={<About/>}></Route>
    </Routes>
   
   
  </Router>
  );
}

export default App;
