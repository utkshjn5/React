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
  addPerson = (component) => {
    component.id = Math.random();
    let array = [...this.state.firstComponent, component];
    this.setState(
      {
        firstComponent: array
      }
    )
  }
  deletePerson = (id) => {
    let array = this.state.firstComponent.filter(component => {
      return component.id !== id
    });
    this.setState(
      {
        firstComponent: array
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Utkarsh Jain</h1>

        <MyFirstComponent firstComponent={this.state.firstComponent} deletePerson={this.deletePerson} />
        <MyFirstSelectComponent firstComponent={this.state.firstComponent} />
        <MyFirstConditionalComponent firstComponent={this.state.firstComponent} />
        <MyFirstFormComponent addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
