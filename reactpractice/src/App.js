import React, { Component } from 'react';
import MyFirstComponent from './MyFirstComponent';
import MyFirstSelectComponent from './MyFirstSelectComponent';
import MyFirstConditionalComponent from './MyFirstConditionalComponent';
import MyFirstFormComponent from './MyFirstFormComponent';


class App extends Component {

  state = {
    firstComponent: [
      { name: 'Utkarsh', age: '26', id: 1 },
      { name: 'Jain', age: '26', id: 2 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Utkarsh Jain</h1>

        <MyFirstComponent firstComponent={this.state.firstComponent} />
        <MyFirstSelectComponent firstComponent={this.state.firstComponent} />
        <MyFirstConditionalComponent firstComponent={this.state.firstComponent}/>
        <MyFirstFormComponent/>
      </div>
    );
  }
}

export default App;
