import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import CarListContainer from './car/CarListContainer'; // eslint-disable-line import/no-named-as-default
import SearchCarListContainerByCriteria from './car/SearchCarListContainerByCriteria';
import AddCarContainer from './car/AddCarContainer'; // eslint-disable-line import/no-named-as-default
import SearchCarContainer from './car/SearchCarContainer';

import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default



const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={CarListContainer} />
                        <Route path="/cars" component={CarListContainer} />
                        <Route path="/viewCarsByCustomSearch" component={SearchCarListContainerByCriteria} />
                        <Route exact path="/addCar" component={AddCarContainer} />
                        <Route exact path="/carsByMileage" component={SearchCarContainer} />
                        
                       
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;