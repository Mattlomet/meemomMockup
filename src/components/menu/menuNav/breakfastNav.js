import React, { Component } from 'react';

class BreakfastNav extends Component {
  constructor() {
    super();
    this.state = {
        isDesktop : false,
        selectedMenu: "French Toast"
    }
  }
  menuSelect = (event) => {
      

    if (event.target.innerText === "French Toast"){
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: "French Toast",
      })

    }else if (event.target.innerText === "Waffles") {
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: "Waffles",
      })
    } else if (event.target.innerText === "Eggs"){
        let resetElement = document.querySelector('.currentInnerNav');
        resetElement.classList.remove("currentInnerNav")

        event.target.className = 'currentInnerNav'
      this.setState({
        selectedMenu: "Eggs",
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
