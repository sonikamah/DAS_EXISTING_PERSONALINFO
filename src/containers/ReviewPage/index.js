
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'react-addons-update';

import * as Actions from './actions';

class ReviewPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getVerifiedUserData();
    }

    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    render() {
        var data = Object.keys(this.props.verIdUserData).length ? Object.keys(this.props.verIdUserData).map((key) => {
            return (
                <div>
                    <label className="gm-align_left">{key}: </label>
                    <label>{this.props.verIdUserData[key]}</label>
                </div>
            )
        }) : null;


        console.log(this.props.verIdUserData);
        return (
            <div>
                {data}
                <button>Edit</button>
                <button onClick={()=>{
                    browserHistory.push('/saved');
                    }}>Save</button>
            </div>
        )
    }
}
ReviewPage.propTypes = {
    verIdUserData: React.PropTypes.object
};

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = (state, ownProps) => ({
    verIdUserData: state.verIdUserData,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewPage);