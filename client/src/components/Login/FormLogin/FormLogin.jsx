/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../../hooks/useForm";
import { Global } from "../../../helpers/Global";

const FormLogin = ({setData, setMessage}) => {
  
  const {setAuth} = useContext(AuthContext);


  const { form, changed } = useForm({});

  const checkUser = async (e) => {
    e.preventDefault();
    console.log(form);
    
    let userloged = form;
    
    const request = await fetch(Global.url + '/login', {
      method: "POST",
      body: JSON.stringify(userloged),
      headers: {
        "Content-Type":"application/json"
      }
    });

    const dataLogin = await request.json();


    if(dataLogin.status === 'success'){
      localStorage.setItem('token', dataLogin.token);
      localStorage.setItem('user', JSON.stringify(dataLogin.userExists));

      setAuth(dataLogin.userExists);
      setData(dataLogin);
      setMessage(true);
      

    }else {
      setData(dataLogin);
      setMessage(true);
    }

  }

  return (
    <Form className="formRegister_container" onSubmit={checkUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="User" name="email" onChange={changed}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" onChange={changed}/>
      </Form.Group>

      <div className="col text-center">
        <Button variant="primary" type="submit" className="rounded-1 mt-3">
            Log In
        </Button>
      </div>
    </Form>
  )
}

export default FormLogin