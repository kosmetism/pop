'use strict';

import shufflerfm from '../services/shufflerfm';
import TrackListServerActions from '../apps/TrackList/actions/TrackListServerActions';

export function getPopularTracks() {
    shufflerfm.getChartsPopular(
        (err, tracks) => {
            TrackListServerActions.receiveTracks(tracks);
        }
    );
}
