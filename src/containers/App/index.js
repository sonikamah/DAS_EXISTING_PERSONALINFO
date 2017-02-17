/**
 * Created by muduna on 1/10/2017.
 */
/* @flow */
import React, { Component, PropTypes } from 'react';


import Header from '../../components/Header';
import '../../stylesheets/main.scss';
class App extends Component {
  constructor(props :Object) {
    super(props);
  }
  render() {
    return (
      <div className="parent-container gm-align_center">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;