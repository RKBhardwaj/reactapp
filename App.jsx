/*import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
           data: []
        };

        this.state.showTable = false;
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        let items = [{
            id: 1,
            name: 'Foo',
            age: 20
        }, {
            id: 2,
            name: 'Bar',
            age: 30
        }, {
            id: 3,
            name: 'Baz',
            age: 40
        }];
        let tempArray = [];
        for (let i = 0, len = items.length; i < len; i++) {
            tempArray.push(items[i]);
        }
        this.setState({data: tempArray});
        this.state.showTable = !this.state.showTable;
    }

    render() {
        return (
            <div>
                <Header />
                <button onClick={this.setStateHandler}>{this.state.showTable !== true ? 'Show Table' : 'Hide Table'}</button>
                {this.state.showTable === true ?
                <table>
                    <TableHead />
                    {this.state.data.map((person,  i) => <TableRow key = {i} data={person} /> )}
                </table>
                    : ''}

                <Content />
                <div>
                    <h3>Array : {this.props.propArray}</h3>
                    <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                    <h3>Func: {this.props.propFunc(3)}</h3>
                    <h3>Number: {this.props.propNumber}</h3>
                    <h3>String: {this.props.propString}</h3>
                    <h3>Object: {this.props.propObject.objectName1}</h3>
                    <h3>Object: {this.props.propObject.objectName2}</h3>
                    <h3>Object: {this.props.propObject.objectName3}</h3>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
};

App.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function (e) { return e; },
    propNumber: 10,
    propString: 'Hello',
    propObject: {
        objectName1: 'value1',
        objectName2: 'value2',
        objectName3: 'value3'
    }
};

/*App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
};

App.propTypes = {
    propArray: PropTypes.array.isRequired,
};*/

/*class Header extends React.Component {
    render() {
        return (
            <h1>Header</h1>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <h2>Contents</h2>
        )
    }
}

class TableHead extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.age}</td>
                </tr>
            </tbody>
        )
    }
}

export default App*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo} from "./actions/actions";

import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

class App extends Component {
    render() {
        const { dispatch, visibleTools } = this.props;
        return(
            <div>
                <AddTodo onAddClick={text =>dispatch(addTodo(text))} />
                <TodoList todos={visibleTools}/>
            </div>
        )
    }
}

function select(state) {
    return {
        visibleTools: state.todos
    }
}

export default connect(select)(App);
