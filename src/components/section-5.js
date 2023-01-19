import React from 'react'

export default () => (
  <section>
    <div className="s6__titles">
        <h1>Competitions</h1>
        <h4>Integer Cursus Bibendum Augue Ac Cursus .</h4>
      </div>
    <div class="sc-dRZpzm bFyYWa">
        <div class="wrapper">
            <div class="city">
                <img 
                class="image" 
                src="https://b.zmtcdn.com/data/o2_assets/2a3af05cf78548d43fc44fbda42d87b01663301983.png" 
                alt="Pune" width="102px" height="102px"/>
                    <div class="city-name">Dance</div></div>
                    <div class="city"><img class="image" src="https://b.zmtcdn.com/data/o2_assets/743779d6faa7117badeb00da7dc1498d1663302104.png" alt="Mumbai" width="102px" height="102px"/>
                    <div class="city-name">photography</div></div>
                    <div class="city"><img class="image" src="https://b.zmtcdn.com/data/o2_assets/7d574232aabb28f8da9db177ba9872d31663301931.png" alt="Ahmedabad" width="102px" height="102px"/>
                    <div class="city-name">Singing</div></div><div class="city"><img class="image" src="https://b.zmtcdn.com/data/o2_assets/19ce5a18396ef1d301bd2a43f328d4b41663302123.png" alt="New Delhi" width="102px" height="102px"/>
                    <div class="city-name">Art</div></div><div class="city"><img class="image" src="https://b.zmtcdn.com/data/o2_assets/9f3f72dc32b69039a8167f7980980f261663302139.png" alt="Hyderabad" width="102px" height="102px"/>
                    <div class="city-name">Writing</div></div><div class="city"><img class="image" src="https://b.zmtcdn.com/data/o2_assets/da194613b9257893105db86e0fb097261663302160.png" alt="Bengaluru" width="102px" height="102px"/>
                    <div class="city-name">giensel</div></div><div class="city"><img class="image" src="https://b.zmtcdn.com/data/o2_assets/3d626abec82c69fdc5a222344d435d941663302176.png" alt="Kolkata" width="102px" height="102px"/>
                    <div class="city-name">aiwor</div></div></div></div>
    <style>
      {`
        .bFyYWa {
            background: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
        }
        .bFyYWa .wrapper {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1em;
        }
        .bFyYWa .city {
            margin: 0.5em;
            text-align: center;
        }
        .s5 {
            font-size: 16px;
            margin-top: 10em;
            height: 55vh;
            background-image: url(https://bootstrapmade.com/demo/themes/eStartup/img/video-bg.jpg);
            background-position: center;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .s6__titles {
              margin-bottom: 4em;
              text-align: center;
          }

        .s6__titles h1 {
              font-size: 3em;
              margin-bottom: .8em;
              font-weight: 100;
              text-transform: capitalize;
              letter-spacing: 2px;
          }
            .s6__titles h4 {
                font-size: .9em;
                font-weight: 100;
                color: dimgray;
        
        .inner-circle i {
            color: white;
            transition: all .3s;
        }
        .hide-play {
            position: absolute;
        }
        .inner-circle:hover {
            transform: scale(1.5);
        }
        .inner-circle:hover i:not(.hide-play) {
            transform: scale(10);
            opacity: 0;
        }
        

        @keyframes alert {
            from {
                transform: scale(1);
            }
            to {
                border: none;
                transform: scale(1.5);
            }
            
        }
        
        
        `}
    </style>
  </section>
)
