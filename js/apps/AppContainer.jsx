'use strict';

import React from 'react';
import ReactRouter from 'react-router';

let RouteHandler = ReactRouter.RouteHandler;

let AppContainer = React.createClass({
    render() {
        return (
            <div className="container clearfix">
                <RouteHandler />
            </div>
        );
    }
});

export default AppContainer;
