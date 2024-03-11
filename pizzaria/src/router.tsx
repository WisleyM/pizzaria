import { Routes, Route } from 'react-router-dom';
import  RoutePath  from '../src/types/routes';
import Home from '../src/pages/Home';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}

export default Router;