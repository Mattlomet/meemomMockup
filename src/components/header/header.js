import React, { Component } from 'react';
import logoImage from '../../assets/meemomslogo.png'
import './header.css'
class Header extends Component {
  constructor() {
    super();
    this.state = {
        isDesktop : false,
    }
  }
  menuSelectMobile = () => {
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
    const mobileFullScreenToggle = (isDesktop) ? 'hero backgroundImage is-fullheight-with-navbar' : 'hero backgroundImage is-fullheight'
    return (
      <div>
        <section class={mobileFullScreenToggle}>
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
        </div>
        
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
              <img src={logoImage} alt="Logo" />
          <div className="subtitle">open everyday 7am-3pm</div>
      
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
      </div>
    );
  }
}

export default Header;
