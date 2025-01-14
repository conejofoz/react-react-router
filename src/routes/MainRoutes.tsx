import { Routes, Route } from 'react-router-dom'; 

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../auth/RequireAuth';
import { Login } from '../pages/Login';

export const MainRoutes = ()=>{
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<RequireAuth><About /></RequireAuth>} />
          <Route path='/sobre/:slug' element={<AboutItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}