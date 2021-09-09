import React from 'react';
import './style.css';
import search from '../../assets/search.svg'
import bell from '../../assets/bell.svg'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            
            <div className="left-part">
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </a>
            </div> 
        
            <div className="header--menus">
                    <div className="menus">
                    <div className="menu--inicio">
                        Inicio
                    </div>
                    <div className="menu--series">
                        Séries
                    </div>
                    <div className="menu--filmes">
                        Filmes
                    </div>
                    <div className="menu--bombando">
                        Bombando
                    </div>
                    <div className="menu--mylist">
                        Minha lista
                    </div>
                    </div>
            </div>
            </div>
            <div className="right-part">
            <div className="header--user">
                <img className="icon--seach" src={search} alt="" />
                <img className="icon--bell" src={bell} alt="" />
                <a href="/singin">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </a>
                

            </div> 
            </div>
        </header>

    )
}