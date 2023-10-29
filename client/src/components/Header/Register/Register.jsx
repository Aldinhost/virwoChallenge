import { useState } from 'react';
import FormRegister from './FormRegister/FormRegister';
import Message from '../../Message/Message';

const Register = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState(false);

  const {status, msg} = data;


  return (
    <div className='register_container'>
        <h1>My News Feed</h1>
        <FormRegister 
          setData={setData}
          setMessage={setMessage}
        />

        {
          message && <Message status={status} msg={msg}/>
        }
    </div>
  )
}

export default Register






// message && (
//   success ? (
//     <div className="alert alert-success text-center" role="alert">
//       {msg}
//     </div>
//   ): (
//     <div className="alert alert-danger text-center" role="alert">
//       {msg}
//     </div>
//   )
// )