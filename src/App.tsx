import { Routes, Route } from 'react-router-dom'; 

import { Home } from './pages/Home';
import { About } from './pages/About';

const App = ()=>{
  return (
    <div>
      <header>
        <h1>Título do site</h1>
      </header>
      <hr />
      <div className="py-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
        </Routes>
      </div>
      <hr />
      <footer>
        Rodapé bla bla bla
      </footer>
    </div>
  )
}


export default App;