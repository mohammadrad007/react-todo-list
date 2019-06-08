import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  render() {
    const { items, clearLists } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => (
          <TodoItem key={item.id} title={item.title} />
        ))}
        <button
          type="submit"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearLists}
        >
          clear list
        </button>
      </ul>
    );
  }
}
export default TodoList;
