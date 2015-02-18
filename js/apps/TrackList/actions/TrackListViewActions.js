import flux from '../../../flux';
import { getPopularTracks } from '../../../utils/TracksWebAPIUtils';

class TrackListViewActions {
    requestTracks() {
        this.dispatch();
        getPopularTracks();
    }
}

export default flux.createActions(TrackListViewActions);
