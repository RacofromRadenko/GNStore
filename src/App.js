import React, { Component } from 'react';
import classnames from 'classnames';
// import './App.scss';
import './assets/styles/gstore-custom/index.scss';
import Header from "./components/views/Header/Header";
import StoreFront from "./components/views/StoreFront/StoreFront";
import Navigation from "./components/views/Navigation";
import { Route } from "react-router-dom";
import Details from "./components/views/StoreFront/Details";
import EqualizeElementsByRow from './utilities/EqualizeElementsByRow'

class App extends Component {

    componentDidMount() {
        window.addEventListener('load', this.loaded);

    }

    loaded = () => {
        console.log('jeste');
        EqualizeElementsByRow(document.getElementsByClassName('product-data'))

    }

    render() {
        const appClassNames = classnames('gc-app', 'gc-app--desktop');
        return (
            <div className="App">
                <div className={appClassNames}>
                    <div className="gc-body">
                        <Header headerClass="gc-header"/>
                        <Navigation/>
                        <Route path="/" exact component={StoreFront}/>
                        <Route path="/details/" component={Details}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
