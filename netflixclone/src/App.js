import React, { useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow';
import FeatureMovie from './Components/FeaturedMovie'
import Header from './Components/Header'


import './App.css'; 


export default () =>{

  const [movieList, SetMovieList]= useState([])

  const [featuredData, setFeaturedData]= useState(null)

  const [blackHeader, setBlackHeader]= useState(false)

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

  useEffect(()=>{
    const scrollListener = () =>{
        if(window.scrollY > 10){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return(
    <div className="page">
      <Header  black={blackHeader}/>
      
      {featuredData &&
      <FeatureMovie item={featuredData}/>
      }

      <section className="lists">
      {movieList.map((item,key)=>(
      <MovieRow key={key} title={item.title} items={item.items} />
      ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="Coração">🧡</span> por Bruno Micalli <br/>
        Direitos de imagem para Netflix <br/>
        API usada do site Themoviedb.org
      </footer>

     {movieList.length <= 0 &&
      <div className="loading">
      <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="carregando " />
    </div>
     }
      </div>
  );
}