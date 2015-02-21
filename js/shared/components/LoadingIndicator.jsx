import React from 'react';

let LoadingIndicator = React.createClass({
    render() {
        return (
            <div className="loading">
                <img src="./assets/loading-bars-orange.svg" width="64" height="64" />
            </div>
        );
    }
});

export default LoadingIndicator;
