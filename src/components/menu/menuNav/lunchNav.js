import React, { Component } from 'react';
import Bowls from './lunch/bowls';
import Salads from './lunch/salads';
import Challah from './lunch/challahsand';
import Paninis from './lunch/paninis';
import Wraps from './lunch/wraps';
import Soups from './lunch/soups';
import LunchSides from './lunch/lunchsides';



class LunchNav extends Component {
  constructor() {
    super();
    this.state = {
        isDesktop : false,
        selectedMenu: <Bowls/>
    }
  }
  menuSelect = (event) => {
      

    if (event.target.innerText === "Bowls"){
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Bowls/>,
      })

    }else if (event.target.innerText === "Salads") {
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Salads/>,
      })
    } else if (event.target.innerText === "Challah Sandwiches"){
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Challah/>,
      })
    } else if (event.target.innerText === "Paninis") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Paninis/>,
      })
    } else if (event.target.innerText === "Wraps") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Wraps/>,
      })
    } else if (event.target.innerText === "Soups") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <Soups/>,
      })
    } else if (event.target.innerText === "Sides") {
      let resetElement = document.querySelector('.currentInnerNav');
      resetElement.classList.remove("currentInnerNav")

      event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: <LunchSides/>,
      })
    }
  }
  menuSelectMobile =  () => {
      console.log(document.getElementById("item1").value)
      
    if (document.getElementById("item1").value === "Bowls"){
      this.setState({
        selectedMenu: <Bowls/>,
      })

    }else if (document.getElementById("item1").value === "Salads") {
      
      this.setState({
        selectedMenu: <Salads/>,
      })
    } else if (document.getElementById("item1").value === "Challah Sandwiches"){
    
      this.setState({
        selectedMenu: <Challah/>,
      })
    } else if (document.getElementById("item1").value === "Paninis") {
   
      this.setState({
        selectedMenu: <Paninis/>,
      })
    } else if (document.getElementById("item1").value === "Wraps") {
   
      this.setState({
        selectedMenu: <Wraps/>,
      })
    } else if (document.getElementById("item1").value === "Soups") {
    
      this.setState({
        selectedMenu: <Soups/>,
      })
    } else if (document.getElementById("item1").value === "Sides") {
   
      this.setState({
        selectedMenu: <LunchSides/>,
      })
    }
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
                ? <div className="container">
                
                <select id="item1" onChange={this.menuSelectMobile} className="is-size-5">
                    <option value="Bowls" >Bowls</option>
                    <option value="Salads">Salads</option>
                    <option value="Challah Sandwiches">Challah Sandwiches</option>
                    <option value="Paninis">Paninis</option>
                    <option value="Wraps" >Wraps</option>
                    <option value="Soups">Soups</option>
                    <option value="Sides">Sides</option>
                </select>
                </div>
                :<div class="container">
              <ul>
                <li>
                  <a className="currentInnerNav" onClick={this.menuSelect}>Bowls</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Salads</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Challah Sandwiches</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Paninis</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Wraps</a>
                </li>
                <li>
                  <a onClick={this.menuSelect}>Soups</a>
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

export default LunchNav;
