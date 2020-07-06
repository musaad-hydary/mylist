import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem:"",
      list:[]
    }

  }

  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    // create item w unique id
    console.log(this.state.newItem)
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // copy of current list items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    //update tate with new list and reset
    this.setState({
      list,
      newItem:""
    })
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list : updatedList});
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>MY LIST</h1>
          Add an Item...
          <br/>
          <input 
          type = "text"
          placeholder = "Type item here..."
          value = {this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
          onClick={() => this.addItem()}
          >
            Add
          </button>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key = {item.id}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    >
                      X
                </button>
                </li>
      
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
