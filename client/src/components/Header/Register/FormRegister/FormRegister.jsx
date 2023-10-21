/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../../../hooks/useForm";
import { Global } from "../../../../helpers/Global";

const FormRegister = ({setData, setMessage}) => {

  const { form, changed } = useForm({});

  const saveUser = async (e) =>{
    e.preventDefault();
    let newUser = form;

    const request = await fetch(Global.url + '/register',{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }

    });
    
    const data = await request.json();
    console.log(data);
    if(data.status === 'Success'){
      setData(data);
      setMessage(true);
    }else {
      setData(data);
      setMessage(true);
    }

  }

  return (
    <Form className="formRegister_container" onSubmit={saveUser}>
      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Control type="text" placeholder="User" name="name" onChange={changed}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" name="email" onChange={changed}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" onChange={changed}/>
      </Form.Group>

      <div className="col text-center">
        <Button variant="primary" type="submit" className="rounded-1 mt-3">
            Sign Up
        </Button>
      </div>
    </Form>
    
  );
};

export default FormRegister;
