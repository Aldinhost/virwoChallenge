import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PublicLayout from '../components/PublicLayout/PublicLayout';
import Login from '../components/Login/Login';
import Register from '../components/Header/Register/Register';
import PrivateLayout from '../components/PrivateLayout/PrivateLayout';
import Home from '../components/Home/Home';
import Error404 from '../components/Error404/Error404';
import AuthContextProvider from '../context/AuthProvider';
import Logout from '../User/LogOut/Logout';


const Routing = () => {
  return (
    <BrowserRouter>
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                </Route>

                <Route path='/home' element={<PrivateLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='logout' element={<Logout/>} />
                </Route>

                <Route path='*' element={<Error404/>}>

                </Route>
            </Routes>
        </AuthContextProvider>
    </BrowserRouter>
  )
}

export default Routing