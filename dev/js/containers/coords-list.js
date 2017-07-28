import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPoint} from '../actions/index'


class CoordList extends Component {

  //displaying the lat and lng of the components
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

//getting redux state to this.props
function mapStateToProps(state) {
    return {
        coords :state.coords,
    };
}


export default connect(mapStateToProps)(CoordList);
