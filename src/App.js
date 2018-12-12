import React, { Component } from 'react';
import classnames from 'classnames';
import './App.scss';
import './assets/styles/gstore-custom/index.scss';
import Header from "./components/views/Header/Header";
import StoreFront from "./components/views/StoreFront/StoreFront";

class App extends Component {
    render() {
        const appClassNames = classnames('gc-app', 'gc-app--desktop');
        console.log(appClassNames);
        return (
            <div className="App">
                <div className={appClassNames}>
                    <div className="gc-body">
                        <Header headerClass="gc-header"/>
                        <StoreFront/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
