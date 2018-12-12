import React from 'react';
import {NavLink} from "react-router-dom";
import StoreFront from '../StoreFront/StoreFront'


const Navigation = () => {
    return (
        <div className="gnStore-navigation">
            <div>
                <ul role="tablist" className="gc-tabs__list nav">
                    {/*<li role="presentation" className="gc-tab active"><a id="gnorg-ladder-gnStoreFront-tab-1" role="tab" aria-controls="gnorg-ladder-gnStoreFront-pane-1" aria-selected="true" href="http://agenzzia.com">All Products</a></li>*/}
                    <li role="presentation" className="gc-tab"><NavLink to='/'>All Products</NavLink></li>

                    <li role="presentation" className="gc-tab"><a id="gnorg-ladder-gnStoreFront-tab-2" role="tab" aria-controls="gnorg-ladder-gnStoreFront-pane-2" tabIndex="-1" aria-selected="false" href="http://agenzzia.com">Games</a></li>
                    <li role="presentation" className="gc-tab"><a id="gnorg-ladder-gnStoreFront-tab-3" role="tab" aria-controls="gnorg-ladder-gnStoreFront-pane-3" tabIndex="-1" aria-selected="false" href="http://agenzzia.com">Subscriptions</a></li>
                    <li role="presentation" className="gc-tab"><a id="gnorg-ladder-gnStoreFront-tab-4" role="tab" aria-controls="gnorg-ladder-gnStoreFront-pane-4" tabIndex="-1" aria-selected="false" href="http://agenzzia.com">Gift Cards</a></li>
                    <li role="presentation" className="gc-tab"><a id="gnorg-ladder-gnStoreFront-tab-5" role="tab" aria-controls="gnorg-ladder-gnStoreFront-pane-5" tabIndex="-1" aria-selected="false" href="http://agenzzia.com">Points</a></li>
                    <li role="presentation" className="gc-tab"><a id="gnorg-ladder-gnStoreFront-tab-7" role="tab" aria-controls="gnorg-ladder-gnStoreFront-pane-7" tabIndex="-1" aria-selected="false" href="http://agenzzia.com">Gaming Software</a></li>
                </ul>
                <div className="gc-tabs__content tab-content">
                    <div id="gnorg-ladder-gnStoreFront-pane-1" aria-labelledby="gnorg-ladder-gnStoreFront-tab-1" role="tabpanel" aria-hidden="false" className="fade gc-tab__panel tab-pane active in">

                    </div>
                    <div id="gnorg-ladder-gnStoreFront-pane-2" aria-labelledby="gnorg-ladder-gnStoreFront-tab-2" role="tabpanel" aria-hidden="true" className="fade gc-tab__panel tab-pane"></div>
                    <div id="gnorg-ladder-gnStoreFront-pane-3" aria-labelledby="gnorg-ladder-gnStoreFront-tab-3" role="tabpanel" aria-hidden="true" className="fade gc-tab__panel tab-pane"></div>
                    <div id="gnorg-ladder-gnStoreFront-pane-4" aria-labelledby="gnorg-ladder-gnStoreFront-tab-4" role="tabpanel" aria-hidden="true" className="fade gc-tab__panel tab-pane"></div>
                    <div id="gnorg-ladder-gnStoreFront-pane-5" aria-labelledby="gnorg-ladder-gnStoreFront-tab-5" role="tabpanel" aria-hidden="true" className="fade gc-tab__panel tab-pane"></div>
                    <div id="gnorg-ladder-gnStoreFront-pane-7" aria-labelledby="gnorg-ladder-gnStoreFront-tab-7" role="tabpanel" aria-hidden="true" className="fade gc-tab__panel tab-pane"></div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
