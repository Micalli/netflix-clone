import React, { useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow';


export default () =>{

  const [movieList, SetMovieList]= useState([])

  useEffect(() =>{
    const loadAll = async ()=>{
      //Pegando a lista dos filmes

      let list = await Tmdb.getHomeList();
      SetMovieList(list)
    }

    loadAll()
  }, []);
  return(
    <div className="page">
      <section className="lists">
      {movieList.map((item,key)=>(
      <MovieRow key={key} title={item.title} items={item.items} />
      ))}
      </section>
      </div>
  );
}