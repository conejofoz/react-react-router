import { Routes, Route, useRoutes } from 'react-router-dom'; 

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../auth/RequireAuth';
import { Login } from '../pages/Login';

export const MainRoutes = ()=>{

    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/sobre', element: <RequireAuth><About /></RequireAuth>},
        {path: '/sobre/:slug', element: <AboutItem />},
        {path: '/login', element: <Login />},
        {path: '*', element: <NotFound />},
    ])

    /* 
    Obs: se quiser usar no App é só criar uma constante e atribuir a esse objeto useRoutes e usar no template assim:
    const routes = useRoutes([objstos acima])
    { routes }
     */

    /* return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<RequireAuth><About /></RequireAuth>} />
          <Route path='/sobre/:slug' element={<AboutItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    ) */
}