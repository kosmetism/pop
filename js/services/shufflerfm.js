'use strict';

import config from '../config';
import ShufflerFM from 'shufflerfm';

export default new ShufflerFM(
    config.shufflerfm.appKey,
    config.shufflerfm.appSecret
);
