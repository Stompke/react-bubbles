import React from "react";
import axios from 'axios';


// import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component  {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }


    submitLogin = (e) => {
      e.preventDefault();
      axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        console.log(res)
        this.props.history.push('/bubble-page');
      })
      .catch(err => {
        console.log(err)
      })
    }

  onChangeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
      ...this.state.credentials,
      [e.target.name]: e.target.value
      }
    })
  }

render() {
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.submitLogin}>
        <input value={this.state.credentials.username} type='text' placeholder='username' name='username' onChange={this.onChangeHandler} />
        <input value={this.state.credentials.password} type='password' placeholder='password' name='password' onChange={this.onChangeHandler} />
        <button type='submit'>login</button>
      </form>

    </>
  );
};
}

export default Login;
