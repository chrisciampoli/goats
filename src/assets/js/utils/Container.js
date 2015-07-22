import React from 'react';
import ReactDI from 'react-di';

import InstagramAPI from '../REST/InstagramAPI';
import Instagram from '../classes/Instagram';

class Container extends ReactDI {
    constructor(Bang) {
        super({
            dispatcher: new (require("flux")).Dispatcher(),
            instagramAPI: new InstagramAPI(),
            instagram: new Instagram()
        });

        this.inject(React);
    }
}

module.exports = Container;
