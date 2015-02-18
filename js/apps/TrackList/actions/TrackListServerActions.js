import flux from '../../../flux';

class TrackListServerActions {
    constructor() {
        this.generateActions('receiveTracks');
    }
}

export default flux.createActions(TrackListServerActions);
