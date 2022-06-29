import React,{lazy, Suspense} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from './config/ROUTES';
import SpinPage from './modules/common/components/SpinPage';
const HomePage = lazy(() => import('./modules/home/pages/HomePage'));

const RoutesConfig = () => {
  
  const location = useLocation();

  return (
    <Suspense fallback = {<SpinPage />}>
        <Routes location = {location}>
            <Route path={ROUTES.home} element={<HomePage/>} />
            <Route path="/" element={<HomePage/>} />
        </Routes>
    </Suspense>
  )
}

export default RoutesConfig