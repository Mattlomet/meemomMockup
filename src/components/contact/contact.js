import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      name : '',
      email: '',
      subject: '',
      body: ''
    }
  }
  handleInput = event => {
    //used for setting username and password states
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
    render() {
        return (
            < div className="hero is-large"
                id="contact" >
                <h1 className="title">
                    Contact Us!
      </h1>
                <div className="columns marginForContact">
                <div className="column">
                
                <div className=" has-text-centered">
                    
      <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name" name="name" onChange={this.handleInput}/>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        < input class = "input"
        type = "email"
        placeholder = "Email@email.com"
        name = "email"
        onChange = {
          this.handleInput
        }
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>





<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        < input class = "input"
        type = "text"
        placeholder = "e.g. Partnership opportunity"
        name = "subject"
        onChange = {
          this.handleInput
        }
        />
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Body</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        < textarea class = "textarea"
        placeholder = ""
        name = "body"
        onChange = {
          this.handleInput
        } > </textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control has-text-centered">
        <button class="button is-info">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
                </div>
                
                
                </div>
                <div className="column">
                    <div class="card">
  <div class="card-content">
    <p class="title has-text-info">
      Wall Township
    </p>
    <p class="subtitle">
      Kmart plaza 35
1825 Highway 35
Wall, New Jersey 07719
<br/>
732.359.8544
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
          < a className = "has-text-info"
          href = "tel:7323598544" >
       <i class="fas fa-phone"></i>
          </a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        < a className = "has-text-info"
        href = "http://maps.google.com/?q=3541 1825, NJ-35, Wall Township, NJ 07719"
        target = "_blank"
        rel = "nooppener noreferrer" >
        <i class="fas fa-directions"></i>
</a>
      </span>
    </p>
  </footer>
</div>
<div class="card">
  <div class="card-content">
    <p class="title has-text-info">
      Middletown
    </p>
    <p class="subtitle">
      Middletown Plaza
1383 Highway 35
Middletown, New Jersey 07748
<br/>
732.856.9499
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span >
       < a className = "has-text-info"
        href = "tel:7328569499" >
       <i class="fas fa-phone"></i>
          </a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
          <a className = "has-text-info" href="http://maps.google.com/?q=1383 Highway 35
Middletown, New Jersey 07748" target="_blank" rel="nooppener noreferrer">
        <i class="fas fa-directions"></i>
</a>
      </span>
    </p>
  </footer>
</div>
                </div>

                </div>
                
            </div>
        );
    }
}

export default Contact;