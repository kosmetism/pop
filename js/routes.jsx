import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import AppContainer from './pages/AppContainer.jsx';
import TrackListContainer from './pages/tracks/TrackListContainer.jsx';
import TrackDetailsContainer from './pages/tracks/TrackDetailsContainer.jsx';

export default (
    <Route name="list" path="/" handler={AppContainer}>
        <Route name="track" path="tracks/:trackId" handler={TrackDetailsContainer} />
        <DefaultRoute handler={TrackListContainer} />
    </Route>
);
