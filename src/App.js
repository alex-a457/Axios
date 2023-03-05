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
      record: [],
      records: [],
    };
  }
  render() {
    return (
      <>
        <h1>Axios</h1>
        <button onClick={this.get}>Get</button>
        <button onClick={this.post}>Post</button>
        {this.state.record?.title}
        {this.state.records.map((x) => (
          <div>{x.title}</div>
        ))}
      </>
    );
  }

  get = () => {
    axios.get('/posts').then((result) => {
      this.setState({ records: result.data });
      console.log(this.state.records);
    });
  };

  post = () => {
    let payload = {
      title: 'alex',
      body: 'therila',
      userId: 1,
    };
    axios.post('/posts', payload).then((result) => {
      console.log(result.data, 'post');
      this.setState({ record: result.data });
      console.log(this.state.record);
    });
  };
}
export default App;
