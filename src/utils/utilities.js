import React from 'react';
import { hashHistory } from 'react-router';


class Utilities extends React.Component {
    constructor(props) {
        super(props);
        this.router = hashHistory;
    }
    transitionTo(route) {
        if (typeof route === 'undefined' && router === '') {
            router = 'login';
        }
        let router = this.router;
        let location = router.getCurrentLocation().pathname;
        //Need to look for better option
        //See how we can get routeParams here or configure store
        let splitedLocation = location.split('/');
        router.replace('/' + route);
    }
}

export default new Utilities();