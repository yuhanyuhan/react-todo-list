import React, { Component } from "react";
import "./App.css";
import {TodoList} from './TodoList.js';

// const todos = ["eat","sleep","code"]; very troublesome 
// direct it to class App TodoList Properties using props! 
// props in child borrows properties from parent 

class App extends Component {
  render() {
    return <div className="App">
    <TodoList title="home" todos={["eat","sleep"]}/> 
    <TodoList title="work" todos={["code"]}/> 
    <TodoList todos={[]}/> 
    </div>;
  }
}

export default App;
