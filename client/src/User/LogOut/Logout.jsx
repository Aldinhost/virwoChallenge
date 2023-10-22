import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const {setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.clear();
    setAuth({});
    navigate('/login');

  },[])

  return (
    <h1>Cerrando sesión</h1>
  )
}

export default Logout