
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <>
        {/* CONTENIDO PRINCIPAL */}
        <section className='layout__content'>
            <Outlet/>
        </section>
    </>
  )
}

export default PublicLayout