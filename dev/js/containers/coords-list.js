import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class CoordList extends Component {

    renderList() {

      return this.props.coords.map((coord) => {
          return (
              <li
                  key="1"
                  onClick={() => this.props.selectUser(coord)}
              >
                  {coord.lat} {coord.lng}
              </li>
          );
      });



      console.log(this.props.coords);

    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
      //  users: state.users,
        coords :state.coords
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(CoordList);