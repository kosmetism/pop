import React from 'react';
import { RouteHandler } from 'react-router';

let AppContainer = React.createClass({
    render() {
        return (
            <div className="container">
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

export default AppContainer;
