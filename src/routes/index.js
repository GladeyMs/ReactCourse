import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../container/Login';

function CustomRoute() {
    return (
        <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
        </React.Fragment>
    )
}

export default CustomRoute
