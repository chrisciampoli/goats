import React from 'react';
import ReactDI from 'react-di';

class Container extends ReactDI {
    constructor(Bang) {
        super({
            dispatcher: new (require("flux")).Dispatcher(),
        });

        this.inject(React);
    }
}

module.exports = Container;
