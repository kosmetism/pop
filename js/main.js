'use strict';

import 'es5-shim';
import 'es5-shim/es5-sham';

import React from 'react';
import Router from './router';
import RouterActions from './shared/actions/RouterActions';

window.React = React;

Router.run((Handler, state) => {
    RouterActions.routeChange(state);
    React.render(
        React.createElement(Handler, null),
        document.getElementById('app')
    );
});
