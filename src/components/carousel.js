import { Carousel } from 'react-carousel-minimal';
import React from 'react';

function Carousel1() {
 const data = [
    {
      image: "carousel-images/IMG_20230111_201054.jpg",
   
    },
    {
      image: "carousel-images/IMG_20230111_201112.jpg",
  
    },
    {
      image: "carousel-images/IMG_20230111_201130.jpg",
      
    },
    {
      image: "carousel-images/IMG_20230111_201154.jpg",
      
    },
    {
      image: "carousel-images/IMG_20230111_201211.jpg",
  
    },
    {
      image: "carousel-images/IMG_20230111_201315.jpg",
      
    },
    {
      image: "carousel-images/IMG_20230111_201334.jpg",
  
    },
    {
      image: "carousel-images/IMG_20230111_201349.jpg",
      
    },
    {
      image: "carousel-images/IMG_20230111_201404.jpg",
      
    },
    {
      image: "carousel-images/IMG_20230111_201421.jpg",
      
    },
    {
      image: "carousel-images/IMG_20230111_201437.jpg",
      
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App" style={{marginTop:100,marginBottom:100}}>
      <div style={{ textAlign: "center" }}>
        <h2><strong>Here are some of insights of Yuvarang2019</strong></h2>
   
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100em"
            height="600px"
            captionStyle={captionStyle}
            radius="30px"
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100em",
              maxHeight: "600px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel1;