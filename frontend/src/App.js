import Header from './modules/Header';
import Home from './modules/Home';
import Login from './modules/Login';
import Register from './modules/Register';
import { Routes, Route} from 'react-router-dom';
import Panel from './modules/Panel';
import './/css/App.css';
import { AuthProvider } from './context/authContext.js';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/tasks" element={<h1>hola </h1>}></Route>
              <Route path='/add-task' element={<h1>hola add</h1>}></Route>
              <Route path='/tasks/:id' element={<h1>hola update</h1>}></Route>
              <Route path="/panel" element={<Panel />} />
            </Route>
          </Route>
        </Routes>
    </AuthProvider>
  );
}



export default App;