import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Detalhes from './pages/curso-detalhe';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/detalhes" element={<Detalhes />}>
            <Route path='?id=:id' element={<Detalhes />} />
          </Route>
          <Route exact path='/' element={< Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
