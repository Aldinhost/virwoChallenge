import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom'

const PublicLayout = () => {

  const {auth} = useContext(AuthContext);
  console.log(auth.id);
  return (
    <>
        <section className='layout__content'>
          {
            !auth.id ? (
              <Outlet/>
            ) : (
              <Navigate to={`/home`}/>
            )
          }
        </section>
    </>
  )
}

export default PublicLayout