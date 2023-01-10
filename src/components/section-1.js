import React from 'react'
import color from '../textcolor/colors'
import { Container, Row, Col } from 'reactstrap'

export default () => {
  const width=window.innerWidth;
  return (
    <section className="s1" style={{marginTop:30}}>
      <Container className="s1-cont">
        <Row >
          <Col md="12" className="text-center s1-intro"  >
            <h1 style={{fontWeight:"inherit",fontFamily:"inherit"}}>Most Awaited Megaevent of WCE</h1>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
          
            <h3 >Explore Arts</h3>
            <p >
              Participate in events which are empowered by art.
            </p>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            
            <h3>Enjoy Culture</h3>
            <p>
              Feel the culture of WCE Art Circle by Participating.
            </p>
         
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            
            <h3>Embrace Freedom</h3>
            <p>
             Choose the art form you like and showcase your talent
            </p>
         
          </Col>
        </Row>
      </Container>
      <style>
        {`
        .s1 {
          margin-left:5vh;
          margin-right:5vh;
          border-radius:20px;
          background-color:#F3F3F3;
            font-size: 16px;
        }
      
        .s1-intro {
          
            margin-bottom: 3em;
        }
        
        .s1-intro h1 {
            -webkit-text-stroke:2px ${color};
            text-shadow:2px 2px black;
            color:#93E2E2;
            font-size: 3em;
            font-weight:100 ;
        }
        .s1-intro h3 {
            font-size: 1em;
            font-weight: 200;
            margin-top: 1em;
        }
        .s1-avatar {
            width: 60px;
        }
        
        .s1-advice {
            // background-color:;
            padding: 2em;
            transition: all .5s;
            box-shadow: #f2f0f0 1px 1px 10px, #f2ecec9c 1px 1px 10px;
        }
        .s1-advice:hover {
          -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1,1.1);
            box-shadow: ${color} 2px 2px 10px, ${color} 2px 2px 10px;
        }
        .s1-advice h3 {
            font-size: 1.1em;
            margin-top: 2em;
            letter-spacing: 2px;
        }
        .s1-advice p {
            margin-top: 2em;
            font-size: .95em;
            line-height: 2;
            color: dimgray;
        }
        .s1-advice a {
            font-size: .95em;
            text-decoration: none;
            color: hsl(120, 2%, 34%);
            transition: all .5s;
        }
        .s1-advice a:hover {
            color: var(--brand-color);
        }
        
        `}
      </style>
    </section>
  )
}
