import { Routes, Route } from 'react-router-dom'; 

import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { NotFound } from './pages/NotFound';
import { RequireAuth } from './auth/RequireAuth';
import { Login } from './pages/Login';

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
          <Route path='/sobre' element={<RequireAuth><About /></RequireAuth>} />
          <Route path='/sobre/:slug' element={<AboutItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
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