import flux from '../../../flux';
import TrackListViewActions from '../actions/TrackListViewActions';
import TrackListServerActions from '../actions/TrackListServerActions';

class TrackListStore {
    constructor() {
        this.tracks = [];

        this.bindActions(TrackListViewActions);
        this.bindActions(TrackListServerActions);
    }

    onReceiveTracks(tracks) {
        this.tracks = tracks;
    }
}

export default flux.createStore(TrackListStore);
