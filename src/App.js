import Header from './modules/Header';
import Home from './modules/Home';
import Login from './modules/Login';
import Register from './modules/Register';
import { Routes, Route } from 'react-router-dom';
import Panel from './modules/Panel';
import './/css/App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Header /> }>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="panel" element={<Panel/>}/>
        </Route>
      </Routes>
    </div>
  );
}



export default App;