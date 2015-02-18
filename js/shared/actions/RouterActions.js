import flux from '../../flux';

class RouterActions {
    constructor() {
        this.generateActions('routeChange');
    }
}

export default flux.createActions(RouterActions);
