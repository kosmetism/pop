import React from 'react';

import TrackItem from './TrackItem.jsx';

let TrackList = React.createClass({
    propTypes: {
        tracks: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired
            })
        ).isRequired
    },

    render() {
        var trackNodes = this.props.tracks
            .filter(function (track) {
                return track.stream && track.stream.platform === 'soundcloud';
            })
            .map(function (track) {
                return <TrackItem key={track.id} track={track} />;
            });

        return (
            <div>
                <div className="popular-list animated bounceInUp clearfix">
                    {trackNodes}
                </div>
            </div>
        );
    }
});

export default TrackList;
