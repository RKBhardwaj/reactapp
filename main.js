/*import React from 'react';
import ReactDom from 'react-dom';
//import App from './App.jsx';

import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

export default  class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to = '/home'>Home</Link></li>
                    <li><Link to = '/about'>About</Link></li>
                    <li><Link to = '/contact'>Contact</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

export class Home extends React.Component {
    render() {
        return (
            <h1>Home</h1>
        )
    }
}

export class About extends React.Component {
    render() {
        return (
            <h1>About</h1>
        )
    }
}

export class Contact extends React.Component {
    render() {
        return (
            <h1>Contact</h1>
        )
    }
}

//ReactDom.render(<App />, document.getElementById('app'));

ReactDom.render((
    <Router history={browserHistory}>
        <Route path= '/' component={App}>
            <IndexRoute />
            <Route path='home' component={Home} />
            <Route path='about' component={About} />
            <Route path='contact' component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'));*/


import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.jsx';
import todoApp from './reducers/reducers';

let store = createStore(todoApp);
let rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <App />
    </Provider>,

    rootElement
);