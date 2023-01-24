import {Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { Products } from './views/Products';
import { AboutUs } from './views/AboutUs';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
        </Routes>
    </div>
  );
}

export default App;