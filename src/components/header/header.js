import { NavLink } from 'react-router-dom';
import './header.scss';
import Logo from '../../img/logo.svg';
import { useState } from 'react';

export const Header = () => {
  const body = document.querySelector('body');
  const[isBurger, setBurger] = useState(false);
  window.addEventListener('resize', ()=>{
    if(window.screen.availWidth>768){
      setBurger(false);
      body.className = '';
    }
  });
  
  return (
    <header className='header'>
      <div className='header__logo-wrapper'>
        <NavLink className='header__logo' to="/"><img src={Logo} alt="Логотип сайта" onClick={()=>{setBurger(false); body.className=''}} /></NavLink>
      </div>
      <div className='header__nonburger-links'>
        <NavLink className='header__links' to="/base">Базовая</NavLink>
        <NavLink className='header__links' to="/upper">Высшая</NavLink>
        <NavLink className='header__links' to="/statistics">Статистика</NavLink>
        <NavLink className='header__links' to="logics">Логика</NavLink>
      </div>
      <div className={`header__burger-links ${isBurger?'active':''}`}>
        <NavLink className='header__links' to="/base" onClick={()=>{setBurger(false); body.className=''}}>Базовая</NavLink>
        <NavLink className='header__links' to="/upper" onClick={()=>{setBurger(false); body.className=''}}>Высшая</NavLink>
        <NavLink className='header__links' to="/statistics" onClick={()=>{setBurger(false); body.className=''}}>Статистика</NavLink>
        <NavLink className='header__links' to="logics" onClick={()=>{setBurger(false); body.className=''}}>Логика</NavLink>
      </div>
      <div className='header__burger-icon' onClick={()=>{setBurger(!isBurger); body.classList.toggle('active')}}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={`header__burger-button ${isBurger?'active':''}`}
        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
        <path d="M39 4167 c-9 -7 -21 -22 -27 -34 -17 -31 -17 -3115 0 -3146 6 -12 18
        -27 27 -34 23 -18 5019 -18 5042 0 9 7 21 22 27 34 17 31 17 3115 0 3146 -6
        12 -18 27 -27 34 -23 18 -5019 18 -5042 0z m1926 -193 c-540 -210 -1013 -574
        -1367 -1051 -148 -198 -291 -456 -377 -678 -24 -60 -45 -112 -47 -114 -2 -2
        -4 419 -4 937 l0 942 943 -1 942 0 -90 -35z m1025 -1414 l0 -1450 -1411 0
        -1412 0 7 133 c50 954 553 1816 1359 2323 140 89 396 213 552 270 267 96 596
        161 873 173 l32 1 0 -1450z m375 1424 c572 -86 1086 -453 1362 -970 110 -207
        190 -467 208 -674 3 -41 8 -85 11 -97 l4 -23 -895 0 -895 0 0 895 0 894 53 -5
        c28 -3 97 -12 152 -20z m1585 -501 l0 -528 -58 110 c-110 210 -234 376 -398
        535 -157 151 -291 248 -489 352 l-110 58 528 0 527 0 0 -527z m-10 -1467 c0
        -61 -49 -230 -95 -325 -145 -301 -421 -508 -754 -566 -46 -8 -101 -15 -122
        -15 l-39 0 0 470 0 470 505 0 505 0 0 -34z m-1530 -106 l0 -120 -121 0 c-120
        0 -120 0 -114 23 21 70 97 158 170 195 66 34 65 35 65 -98z m228 93 c67 -46
        112 -119 112 -183 l0 -31 -82 3 -83 3 -3 118 c-1 64 1 117 6 117 5 0 27 -12
        50 -27z m112 -638 l0 -255 -26 0 c-86 0 -237 56 -326 121 -92 66 -186 202
        -217 314 -22 81 -46 75 279 75 l290 0 0 -255z m1197 -252 c-2 -2 -94 -2 -203
        -1 l-199 3 65 44 c83 57 234 208 291 291 l44 65 3 -199 c1 -109 1 -201 -1
        -203z m-1704 23 l32 -26 -57 0 -58 0 0 58 0 57 26 -32 c13 -18 39 -44 57 -57z"/>
        </g>
        </svg>
      </div>
    </header>
  );
}

