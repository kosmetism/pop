import React from 'react';
import { Link } from 'react-router';

let TrackItem = React.createClass({
    propTypes: {
        track: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            metadata: React.PropTypes.object.isRequired,
            images: React.PropTypes.object
        }).isRequired
    },

    render() {
        var track = this.props.track;
        var styles = track.images ? {backgroundImage: `url(${track.images.ipad364.url})`} : {};

        return (
            <div style={styles} className="box">
                <div className="content">
                    <h2>
                        <span className="artist nowrap">{track.metadata.artist.name}</span>
                    </h2>
                    <p>
                        <span className="track nowrap">{track.metadata.title}</span>
                    </p>
                </div>
                <Link className="link" to="track" params={{trackId: track.id}}></Link>
            </div>
        );
    }
});

export default TrackItem;
