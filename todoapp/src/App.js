import React,{Component} from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';

class App extends Component {
  state={
  todos:[
    {id:1,content:'Awesome'},
    {id:2,content:'Work'}
  ]
  }
  deleteTodo=(id)=>{
    let filteredtodos = this.state.todos.filter(todo=>{
      return todo.id!==id;
    })
    this.setState({
      todos:filteredtodos
    })
  }
  addTodos=(content)=>{
    content.id=Math.random();
    let todo = [...this.state.todos,content];
    console.log(todo);
    this.setState({
      todos:todo
    });
  }
  render(){
  return (
    <div className="todos-App container">
      <h1 className="center blue-text">Todo's</h1>
      
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodos addTodos={this.addTodos}/>
    </div>
  );
  }
}

export default App;
