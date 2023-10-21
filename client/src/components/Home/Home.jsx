import { useState, useEffect } from "react";
import axios from "axios";
import FilterNav from "./FilterNav/FilterNav";
import NewsCard from "./Card/Card";



const Home = () => {

    const [news, setNews] = useState([]);
    const [url, setUrl] = useState('');
    const [peticion, setPeticion] = useState(false);

   
      useEffect(()=>{
        const fetchData = async () =>{
          let urlPeticion = url;
          if(peticion){
            try {
              const response = await axios.get(`${urlPeticion}`);
              setNews(response.data.articles);
            } catch (error) {
                console.error(error);
              }
          }     
        }

        fetchData();
    },[url]);

  return (
    <div className="container">
      <FilterNav setUrl={setUrl} setPeticion={setPeticion}/>

      <div className="home_cards-container">

      {
        !peticion ? (<h3 className="w-100 text-center mt-5">Selecciona una Categoria o Busca alguna noticia.</h3>) : (
          news.map( (item) => (
            <NewsCard key={item.title} item={item}/>
          )))
      }
      </div>
    </div>
  );
}

export default Home