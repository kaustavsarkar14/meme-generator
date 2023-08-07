import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditPage from './components/EditPage';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<EditPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
