import React, { Component } from 'react';
import MyFirstComponent from './MyFirstComponent';
import MyFirstSelectComponent from './MyFirstSelectComponent';
import MyFirstConditionalComponent from './MyFirstConditionalComponent';
import MyFirstFormComponent from './MyFirstFormComponent';
import MyFirstTableComponent from './MyFirstTableComponent';

class App extends Component {

  state = {
    firstComponent: [
      { name: 'Utkarsh', age: '26', id: 1 },
      { name: 'Jain', age: '26', id: 2 }
    ]
  }
  addPerson = (component) => {
    // var count=0
    // const id = this.state.firstComponent.map(com =>{
    //   count++;
    //   return count;
    // })
    // var id = this.state.firstComponent.length;
    // console.log(id);
    
    //component.id = id+1;
    component.id = Math.random();
    alert(component.id);
    let array = [...this.state.firstComponent, component];
    console.log(array);
    this.setState(
      {
        firstComponent: array
      }
    )
    //console.log(this.state.firstComponent);
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
        <MyFirstTableComponent userData={this.state.firstComponent} deleteUser={this.deletePerson}/>
      </div>
    );
  }
}

export default App;
