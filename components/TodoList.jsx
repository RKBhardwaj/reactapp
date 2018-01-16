import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo.jsx";

export default class TodoList extends Component {
    render() {
        return (
            <ul>
            {this.props.todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    />
            )}
            </ul>
        );
    }
};