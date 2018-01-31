import React, { Component } from 'react';
import TodoItem from './todoItem';

class App extends Component {
    state = {
        name: 'react',
        inputText: '',
        todos: []
    }
    render()  {
        return (
            <div>
                <h1>Hey {this.state.name}!!</h1>
                <input type="text" value={this.state.inputText} onChange={(value) => this.setState({inputText: value.target.value})} />
                <button onClick={() => this.handleClick( this.state.inputText)}>add todo</button>
                <div>
                    {this.listTodos(this.state.todos)}
                </div>
            </div>
        );
    }

    handleClick = (newTodo) => {
        const todos = this.state.todos;
        todos.push(newTodo);
        this.setState({
            todos,
            inputText: ''
        });

    }
 
    listTodos = (todos) => {
        if (!todos || !todos.length) {
            return (
                <span>There are no todos</span>
            )
        }

        return (
            <ul>
                {todos.map((t, index) => <TodoItem onClick={this.itemClick} name={t} otherProp={index} key={index} />)}
            </ul>
        )
    }

    itemClick = () => {
        console.log('item clicked')
    }

    aFunc = () => {

    }
    
}

export default App;