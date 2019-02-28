import React, { Component } from 'react';
import BreakfastNav from './menuNav/breakfastNav'
import LunchNav from './menuNav/lunchNav'
import CoffeeNav from './menuNav/coffeeNav'
import './menu.css'

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuNav: <BreakfastNav/>
    }
  }
  menuHeader = (event) => {
    if (event.target.innerText === "Breakfast"){
      let resetElement = document.querySelector('.current');
      resetElement.classList.remove("current")
      
      event.target.className = 'current'
      
      this.setState({
        menuNav: <BreakfastNav/>,
      })

    }else if (event.target.innerText === "Lunch") {
      let resetElement = document.querySelector('.current');
      resetElement.classList.remove("current")

      event.target.className = 'current'

      this.setState({
        menuNav: <LunchNav/>,
      })
    } else if (event.target.innerText === "Coffee Bar"){
      let resetElement = document.querySelector('.current');
      resetElement.classList.remove("current")

      event.target.className = 'current'

      this.setState({
        menuNav: <CoffeeNav/>,
      })
    }
  }
  render() {
    return (
      < div id = "menu"
      className = " hero has-text-info menuUpperMargin" >
      <div>

      <div className="title has-text-info">
      
        Menu
      </div>
      <div className="subtitle has-text-info">
            <nav class="tabs is-boxed is-fullwidth is-info">
              <div class="container">
                <ul>
                  <li>
                    <a className="current" onClick={this.menuHeader}>Breakfast</a>
                  </li>
                  <li>
                    <a onClick={this.menuHeader}>Lunch</a>
                  </li>
                  <li>
                    <a onClick={this.menuHeader}>Coffee Bar</a>
                  </li>
                </ul>
              </div>
            </nav>
      </div>

      {this.state.menuNav}
          
      </div>

      

      </div>
    );
  }
}

export default Menu;
