import React, { Component } from 'react';

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: ''
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render(){
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email"
            name="email" 
            placeholder='email' 
            onChange={this.handleChange}
           />
          <input 
            type="password" 
            name="password" 
            placeholder='password' 
            onChange={this.handleChange}
           />
          <input
            type="password" 
            name="passwordConfirm" 
            placeholder='confirm password' 
            onChange={this.handleChange}
           />
          <input 
            type="firstName" 
            name="firstName" 
            placeholder='first name' 
            onChange={this.handleChange} 
           />
          <input 
            type="lastName" 
            name="lastName" 
            placeholder='last name' 
            onChange={this.handleChange}
           />
          <input
            type="submit" 
            value='submit' 
            onChange={this.handleSubmit} 
           />
        </form>
      </div>
    )
  }
};

export default SignUp;