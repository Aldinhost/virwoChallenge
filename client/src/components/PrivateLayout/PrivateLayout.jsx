import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const PrivateLayout = () => {

  const {auth} = useContext(AuthContext);

  return (
    <> 
      {/* Header */}
      <Header/>
      {
        auth.id ? (

        <section className='layout__content'>
            <Outlet/>
        </section>
        ):(
            <Navigate to='/login'/>
        )
      }
        
    </>
  )
}

export default PrivateLayout