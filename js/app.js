import 'babelify/polyfill';

import 'es5-shim';
import 'es5-shim/es5-sham';

import React from 'react';
import router from './router';
import Flux from './Flux';

const flux = new Flux();

window.React = React;

React.initializeTouchEvents(true);

router.run((Handler, state) => {
    React.render(
        React.createElement(Handler, { flux }),
        document.getElementById('app')
    );
});
