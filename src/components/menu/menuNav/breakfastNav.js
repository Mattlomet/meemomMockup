import React, { Component } from 'react';
import FrenchToast from './breakfast/frenchtoast'
import Waffles from './breakfast/waffles'
import Eggs from './breakfast/eggs'
import Omelettes from './breakfast/omelettes'
import Benedict from './breakfast/benedict'
import Pancakes from './breakfast/pancakes'
import SnackCabinet from './breakfast/snackcabinet'
import Sides from './breakfast/sides'



class BreakfastNav extends Component {
  constructor() {
    super();
    this.state = {
        isDesktop : false,
        selectedMenu: <FrenchToast/>
    }
  }
  menuSelect = (event) => {
      

    if (event.target.innerText === "French Toast"){
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <FrenchToast/>,
      })

    }else if (event.target.innerText === "Waffles") {
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: < Waffles /> ,
      })
    } else if (event.target.innerText === "Eggs"){
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: < Eggs /> ,
      })
    } else if (event.target.innerText === "Omelettes") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Omelettes/>,
      })
    } else if (event.target.innerText === "Benedict") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: < Benedict /> ,
      })
    } else if (event.target.innerText === "Pancakes") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: < Pancakes /> ,
      })
    } else if (event.target.innerText === "Snack Cabinet") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: < SnackCabinet /> ,
      })
    } else if (event.target.innerText === "Sides") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Sides/>,
      })
    }
  }
  menuSelectMobile =  () => {
      console.log(document.getElementById("item1").value)
  }
  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
  }

  resize() {
      this.setState({
          isDesktop: window.innerWidth <= 760
      });
  }
  render() {
      const isDesktop = this.state.isDesktop;
    return (
        <div>

        <nav class="tabs is-boxed is-fullwidth is-info">
            {
                (isDesktop)
                ? <div className="container tag is-large has-background-info">
                
                <select id="item1" onClick={this.menuSelectMobile} className="dropdown">
                    <option value="French Toast" >French Toast</option>
                    <option value="Waffles">Waffles</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Omelettes">Omelettes</option>
                    <option value="Benedict" >Benedict</option>
                    <option value="Pancakes">Pancakes</option>
                    <option value="Snack Cabinet">Snack Cabinet</option>
                    <option value="Sides">Sides</option>
                </select>
                </div>
                :<div class="container">
              <ul>
                <li>
                  <a className="currentInnerNav" onClick={this.menuSelect}>French Toast</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Waffles</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Eggs</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Omelettes</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Benedict</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Pancakes</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Snack Cabinet</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Sides</a>
                </li>
              </ul>
            </div>
            }
      
          </nav>
          {this.state.selectedMenu}
            </div>
    );
  }
}

export default BreakfastNav;
