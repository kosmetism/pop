'use strict';

import React from 'react';
import ReactRouter from 'react-router';

import AppContainer from './shared/AppContainer.jsx';
import TrackListContainer from './apps/TrackList/TrackListContainer.jsx';
import TrackDetailsContainer from './apps/TrackDetails/TrackDetailsContainer.jsx';

let Route = ReactRouter.Route;
let DefaultRoute = ReactRouter.DefaultRoute;

export default (
    <Route name="list" path="/" handler={AppContainer}>
        <Route name="track" path="tracks/:trackId" handler={TrackDetailsContainer} />
        <DefaultRoute handler={TrackListContainer} />
    </Route>
);
