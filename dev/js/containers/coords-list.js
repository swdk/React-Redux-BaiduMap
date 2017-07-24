import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPoint} from '../actions/index'


class CoordList extends Component {


    render() {
        return (
            <ul>
            <li>
            {this.props.coords.lat} {this.props.coords.lng}

            </li>
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
      //  users: state.users,
        coords :state.coords,
      serachedtextfromstate: state.serachedtextfromstate

    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPoint: selectPoint}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(CoordList);
