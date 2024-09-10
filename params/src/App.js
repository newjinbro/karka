import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { About } from './About';
import { Display } from './Display';
import { Home } from './Home';
import { Notfound } from './Notfound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/Display' element={<Display/>} />
      <Route path='/dis' element={<Display/>}/>
      <Route path='*' element={<Notfound/>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
