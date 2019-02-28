import React, { Component } from 'react';
import './specials.css'
import BreakFastSpecials from './specialmenus/breakfastspecial.js'
import LunchSpecials from './specialmenus/lunchspecial.js'

class Specials extends Component {
  constructor() {
    super();
    this.state = {
        isDesktop : false,
        selectedSpecial: <BreakFastSpecials/>
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  specialSelect = (event) => {
      

    if (event.target.innerText === "Breakfast"){
        let resetElement = document.querySelector('.currentInnerNavSpecials');
        resetElement.classList.remove("currentInnerNavSpecials")

        event.target.className = 'currentInnerNavSpecials'
      this.setState({
        selectedSpecial: <BreakFastSpecials/>,
      })

    }else if (event.target.innerText === "Lunch") {
        let resetElement = document.querySelector('.currentInnerNavSpecials');
        resetElement.classList.remove("currentInnerNavSpecials")

        event.target.className = 'currentInnerNavSpecials'
      this.setState({
        selectedSpecial: < LunchSpecials /> ,
      })
    } 
  }

  resize() {
    this.setState({
      isDesktop: window.innerWidth <= 760
    });
  }
  render() {
      const isDesktop = this.state.isDesktop;

    return (
      < div id="specials" className="hero is-large is-info specialsMargin" >
        <div className="title titleMargin">
          Specials
      </div>
      {
        (isDesktop)
        ? <div>
          <nav class="tabs is-boxed is-fullwidth is-info">
        <div class="container">
              <ul>
                <li>
                  <a className="currentInnerNavSpecials" onClick={this.specialSelect}>Breakfast</a>
                </li>
                <li>
                  <a onClick={this.specialSelect}>Lunch</a>
                </li>
              </ul>
            </div>
      
          </nav>
          {this.state.selectedSpecial}
        </div>
        :<div>

          <BreakFastSpecials/> 
          <LunchSpecials/>
        </div>
      }
       
      
      </div>
    );
  }
}

export default Specials;


