
import { useState } from 'react';
import FormLogin from './FormLogin/FormLogin'
import Message from '../Message/Message';

const Login = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState(false);

  const {status, msg} = data;
  return (
    <div className='login_container'>
        <h1>My News Feed</h1>
        <FormLogin
          setData={setData}
          setMessage={setMessage}
        />

        {
          message && <Message status={status} msg={msg}/>
        }
    </div>
  )
}

export default Login