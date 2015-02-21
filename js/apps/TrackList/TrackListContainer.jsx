import React from 'react';

import TrackList from './components/TrackList.jsx';
import LoadingIndicator from '../../shared/components/LoadingIndicator.jsx';
import TrackListStore from './stores/TrackListStore';
import TrackListActions from './actions/TrackListViewActions';

let TracksContainer = React.createClass({
    _getStateFromStores() {
        return {
            tracks: TrackListStore.getState().tracks
        };
    },

    getInitialState() {
        return this._getStateFromStores();
    },

    componentDidMount() {
        TrackListStore.listen(this._onChange);
        this._fetchTracksIfNeeded();
    },

    componentWillUnmount() {
        TrackListStore.unlisten(this._onChange);
    },

    _fetchTracksIfNeeded() {
        if (!this.state.tracks.length) {
            TrackListActions.requestTracks();
        }
    },

    render() {
        let tracks = this.state.tracks;
        let content = !tracks.length ?
            <LoadingIndicator /> :
            <TrackList tracks={tracks} />;

        return (
            <div className="track-list">
                <header className="top-header">
                    <div className="shuffler-logo"></div>
                    <h2 className="intro-title">What is popular on blogs?</h2>
                    <p className="intro-text">Listen to the web most published SoundlCloud tracks.</p>
                </header>
                {content}
            </div>
        );
    },

    _onChange() {
        this.setState(this._getStateFromStores());
    }
});

export default TracksContainer;
