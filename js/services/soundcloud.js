import config from '../config';
import SoundCloudAudio from 'soundcloud-audio';

class SoundCloud extends SoundCloudAudio {
    constructor(clientId) {
        super(clientId);
        this._events = {};
    }

    on(e, fn) {
        this._events[e] = fn;
        this.audio.addEventListener(e, fn, false);
    }

    off(e, fn) {
        this._events[e] = null;
        this.audio.removeEventListener(e, fn);
    }

    unbindAll() {
        for (let e in this._events) {
            let fn = this._events[e];
            if (fn) {
                this.off(e, fn);
            }
        }
    }

    preload(streamUrl) {
        this._track = {stream_url: streamUrl};
        this.audio.src = streamUrl+'?client_id='+this._clientId;
    }
}

export default new SoundCloud(config.soundcloud.clientID);
