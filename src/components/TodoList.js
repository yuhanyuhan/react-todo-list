import React from 'react';
import Title from './Title';
import ToDo from './ToDo';

export const TodoList = props => {
    return ( 
    <ul> 
      <div> 
      <Title name={props.title} />
      {props.todos.map((todo,index) => {
        return <ToDo key={index} name={todo} />
        })}
      </div> 
    </ul>
    );
  }; 