import React, { Component } from 'react';

class BreakfastNav extends Component {
  constructor() {
    super();
    this.state = {
        isDesktop : false
    }
  }
  menuSelect = (event) => {
      

      console.log(document.getElementById("item1").value)
    // if (event.target.innerText === "Breakfast"){
    //   this.setState({
    //     menuNav: <BreakfastNav/>,
    //   })

    // }else if (event.target.innerText === "Lunch") {
    //   this.setState({
    //     menuNav: <LunchNav/>,
    //   })
    // } else if (event.target.innerText === "Coffee"){
    //   this.setState({
    //     menuNav: <CoffeeNav/>,
    //   })
    // }
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
        <nav class="tabs is-boxed is-fullwidth is-info">
            {
                (isDesktop)
                ? <select id="item1" onClick={this.menuSelect} className="dropdown">
                    <option value="volvo" >Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
  
                :<div class="container">
              <ul>
                <li>
                  <a onClick={this.menuSelect}>French Toast</a>
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
    );
  }
}

export default BreakfastNav;
