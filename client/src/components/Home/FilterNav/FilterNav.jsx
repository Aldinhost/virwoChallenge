/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiCalendar } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import moment from "moment/moment";
import Form from 'react-bootstrap/Form';



const FilterNav = ({setUrl, setPeticion}) => {

  const [country, setCountry] = useState(false);
  const [inter, setInter] = useState(false);
  const [local, setLocal] = useState(false);
  const [palabra, setPalabra] = useState('');

  const handleCountry = () =>{
    setCountry(true);
    setInter(false);
    setLocal(false);
    setUrl('https://newsapi.org/v2/top-headlines?country=mx&pageSize=9&apiKey=769a46b836194deb8fb0b8200e9e560b');
    setPeticion(true);
  }
  const handleInternational = () =>{
    setInter(true);
    setCountry(false);
    setLocal(false);
    setUrl('https://newsapi.org/v2/everything?q=internacional&pageSize=9&apiKey=769a46b836194deb8fb0b8200e9e560b');
    setPeticion(true);
  }

  const handleLocal = () =>{
    setLocal(true);
    setCountry(false);
    setInter(false);
    setUrl('https://newsapi.org/v2/everything?q=cuajimalpa&pageSize=9&apiKey=769a46b836194deb8fb0b8200e9e560b');
    setPeticion(true);
  }

  const handleSearch = () =>{
        let valor = palabra
        setUrl(`https://newsapi.org/v2/everything?q=${valor}&pageSize=9&apiKey=769a46b836194deb8fb0b8200e9e560b`);
        setPeticion(true);
      
  }

  const handleChange = (e) =>{
    e.preventDefault();
    setPalabra(e.target.value);
      
  }
    

  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center">

        <div className="col mt-3">
          <ButtonGroup aria-label="Basic example">
            <Button
              onClick={handleCountry}
              variant="secondary rounded-start-1"
              className={country ? 'active' : 'filterNav'}
              id="country"
              
            >
              Your Location Country
            </Button>
            <Button 
              variant="secondary" 
              id="international"
              onClick={handleInternational}
              className={inter ? 'active' : 'filterNav'}
            >
              International
            </Button>
            <Button 
              variant="secondary rounded-end-1" 
              className={local ? 'active' : 'filterNav'}
              id="local"
              onClick={handleLocal}
            >
              Local
            </Button>
          </ButtonGroup>
        </div>

        <div className="col-3 mt-3 home_date d-flex justify-content-between">
          <h3>{moment().format("D-MMM-YYYY")}</h3>
          <BiCalendar className="home_date-icon" />
        </div>
      </div>

      <div className="mt-3">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div className="d-flex">
              <Button className="rounded-start-3 rounded-end-0 home_search-button" onClick={handleSearch}>
                <BiSearch className="home_search-icon"/>
              </Button>
              <Form.Control  className="rounded-start-0" type="text" placeholder="Buscar Noticias" onChange={handleChange}/>
              <button type="submit" disabled className="none border-0" aria-hidden="true"></button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
// news.map( (item) => (
//   <NewsCard key={item.title} item={item}/>
// ))

export default FilterNav



// 'https://newsapi.org/v2/top-headlines?country=mx&pageSize=9&apiKey=1c6a668253074b0ab472229ddce62c82'
//'https://newsapi.org/v2/top-headlines?country=mx&pageSize=9&apiKey=1c6a668253074b0ab472229ddce62c82'