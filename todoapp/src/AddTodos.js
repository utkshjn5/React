import React,{Component} from 'react';

class AddTodos extends Component{
    state={
      content:''
    }
    handleOnChange=(e)=>{
        this.setState({
            content : e.target.value
        })
    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            content:''
        });
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleOnSubmit}>
                <label>Add New Todos:</label>
                <input type="text" onChange={this.handleOnChange} value={this.state.content}/>
            </form>
            </div>
        )
    }
}

export default AddTodos;