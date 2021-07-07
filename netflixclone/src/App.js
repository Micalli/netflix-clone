import React, { useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow';
import FeatureMovie from './Components/FeatureMovie'


import './App.css'; 


export default () =>{

  const [movieList, SetMovieList]= useState([])

  const [featuredData, setFeaturedData]= useState(null)

  useEffect(() =>{
    const loadAll = async ()=>{
      //Pegando a lista dos filmes

      let list = await Tmdb.getHomeList();
      SetMovieList(list)

      //pegando o featured
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChoosen = Math.floor(Math.random()  * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChoosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

     
      console.log(chosenInfo)
    }

    loadAll()
  }, []);
  return(
    <div className="page">

      {featuredData &&
      <FeatureMovie item={featuredData}/>
      }

      <section className="lists">
      {movieList.map((item,key)=>(
      <MovieRow key={key} title={item.title} items={item.items} />
      ))}
      </section>
      </div>
  );
}