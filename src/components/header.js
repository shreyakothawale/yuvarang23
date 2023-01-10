import React from 'react'
import color from '../textcolor/colors'
import { Container, Jumbotron } from 'reactstrap'

const Header = () => {
  
  return (
    <header>
      <div className="intro-logo jumbo-bg" >
        <video autoPlay loop playsInline muted className="back-video" >
          <source src='video.mp4' type='video/mp4' />
        </video>
        <h1 id='title'>युवारंग 2023</h1>
        <h3 id="subtitle" style={{marginTop:17,fontSize:24}}>Enjoy the youth full of colours</h3>
        <div className="intro-button">
          <a href="" style={{fontSize:20}}>Register</a>
        </div>
        {/* <div className="company-icons">
          <span className="company-icons__item">
            <i className="fab fa-apple" />
            app store
          </span>
          <span className="company-icons__item">
            <i className="fab fa-google-play" />
            google play
          </span>
          <span className="company-icons__item">
            <i className="fab fa-windows" />
            windows
          </span>
        </div> */}
      </div>

      <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .back-video{
          position:absolute;
          left:0;
          bottom:0;
          z-index:-1;

        }
        @media (min-aspect-ratio:16/9){
          .back-video{
            width:100%;
            height:auto;
          }
        }
        @media (max-aspect-ratio:16/9){
          .back-video{
           width:auto;
           height:100%;
           margin-top:10em;
          }
        @media (max-width:600px){
          .back-video{
            display:none;
           }
          #title{
            background: -webkit-linear-gradient(${color}, #333);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          }
          #subtitle {
            color:gray;
          }
          .intro-logo h1 {
            font-size: 4em;
            margin-top:0.8em
          }
        }
      }
        #title{
          // background: -webkit-linear-gradient(${color}, #333);
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          color:white;
          margin-top:1.5em
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 8em;
          font-weight: 900;
          font-family: 'Philosopher', sans-serif;
          color: white;
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: white;
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          transition: box-shadow .3s;
          padding: 0.65em 2.6em;
          border-radius: 30px;
          color: ${color};
          border: 1.8px solid ${color};
          background: white;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          box-shadow: 0 0 11px ${color}; 
          background-color: ${color};
          color: white;
          box-shadow:2px;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
      `}</style>
    </header>
  )
}

export default Header
