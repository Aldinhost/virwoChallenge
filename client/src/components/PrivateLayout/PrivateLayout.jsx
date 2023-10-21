import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const PrivateLayout = () => {
  return (
    <>  
        {/* Header */}
        <Header/>

        {/* CONTENIDO PRINCIPAL */}
        <section className='layout__content'>
            <Outlet/>
        </section>
    </>
  )
}

export default PrivateLayout