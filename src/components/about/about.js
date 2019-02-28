import React, { Component } from 'react';
import meeMom from '../../assets/meetmeemom.png'
import './about.css'
import Cara from './cara.js'
import sliderOne from '../../assets/slider1.jpg'
import sliderTwo from '../../assets/slider2.jpg'
import sliderThree from '../../assets/slider3.jpg'

const portArray = [{
    image: sliderOne,
  }, {
    image: 
      sliderTwo
    ,
  }, {
    image: 
      sliderThree
    ,
  }
]

class About extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 2,
      image: portArray[1].image,
      isDesktop: false,
    }
  }
  componentDidMount(){
    this.callTimeout();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    
  }
  callTimeout = () =>{
setInterval(() => {
  this.setState({
    image: portArray[Math.floor(Math.random() * Math.floor(2))].image
  });
  console.log(Math.floor(Math.random() * Math.floor(3)))
}, 10000);
  }
   resize() {
     this.setState({
       isDesktop: window.innerWidth <= 760
     });
   }
 
  
  render() {
    const isDesktop = this.state.isDesktop;
    const mobileFullScreenToggle = (isDesktop) ? 'hero is-fullheight' : 'hero is-large'
    return (
      <div id="about" className="aboutMargin">
      <section className={mobileFullScreenToggle}>
      
        <div className="columns">
          <div className="column">
            
              <div class="tile">
              <article class="tile is-child">
                    <div className="image is-128x128 is-pulled-left marginRight">

                        <img src={meeMom} alt="meemom" />
                    </div>
                <div className="title">Meet <span className="has-text-info">MeeMom</span></div>
                 <div className="subtitle">

                  Meemom was hands down the sweetest woman anyone could ever know. From close relatives to relative strangers, everyone called her “Mom”. She just had a way about her that made people feel at home. Whether it was with her infectious smile, her warm embrace, or her unbeatable cooking, Meemom’s biggest joy in life was bringing joy to others. We can only hope that the home cooking at Meemom’s Kitchen, created from recipes passed down from Meemom herself, can continue to pull people together and bring smiles to their faces.
                </div>
                    <div className="columns">
                    {
                      (isDesktop)
                      ?<div>
                        <i class="marginIcon fab fa-facebook fa-3x"></i>

                          <i class="marginIcon fab fa-instagram fa-3x"></i>
                        <i class="marginIcon fab fa-yelp fa-3x"></i>
                        
                      </div>
                      :<div>
                        <div className="column">
                        <i class="fab fa-facebook fa-3x"></i>

                      </div>
                      <div className="column">
                        <i class="fab fa-instagram fa-3x"></i>

                      </div>
                      <div className="column">
                        <i class="fab fa-yelp fa-3x"></i>

                      </div>
                      </div>
                    }
                      
                    </div>
        </article>
      </div>
                
             
          
        
        
        </div>
        <div className="column">
        
      <Cara image={this.state.image}/>
            {/* <div class="card">
              <div class="card-content">
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }">
                </iframe>
              </div>
            </div> */}
        
        
        </div>
        </div>

                  </section>
      </div>
    );
  }
}

export default About;


