import React, { Component } from "react";
import PropTypes from "prop-types";
import { directive } from "@babel/types";

class TodoInput extends Component {
  render() {
    return (
      <directive className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            add item
          </button>
        </form>
      </directive>
    );
  }
}
export default TodoInput;
