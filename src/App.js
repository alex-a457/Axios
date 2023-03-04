import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      show: false,
      record: []
    };
  }
  render() {
    return (
      <>
        <h1>Hii</h1>
        <button onClick={this.get}>Get</button>
        <button onClick={this.post}>Post</button>
      </>
    );
  }

  get = () => {
    axios.get('/posts')
    .then(result=>{
      this.setState({records: result.data});
    })
  };
}
export default App;
