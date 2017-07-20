import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import Point from './point';


class BDMap extends Component {


  addMarker(point) {
    this.props.coords[0] = point;
  }

  componentDidMount() {
          this._map = new BMap.Map('map');
          var point = new BMap.Point(this.props.coords[0].lng,this.props.coords[0].lat)
              console.log(point);
          this._map.centerAndZoom(point, 17); // 初始化地图，设置中心点坐标和地图级别
          this._map.addControl(new BMap.NavigationControl());
          this._map.addControl(new BMap.ScaleControl());
          this._map.addControl(new BMap.OverviewMapControl());
          this._map.addControl(new BMap.MapTypeControl());
          this._map.setCurrentCity('北京'); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

          var marker = new BMap.Marker(point);
          this._map.addOverlay(marker);
          marker.enableDragging();

          marker.addEventListener('dragend', function(e) {
              this.addMarker(e.point);
              this.props.selectUser(marker.point);
  						console.log("draged to");
  						console.log(marker.point);
  						this._map.panTo(e.point);
          }.bind(this));

          var options = {
              renderOptions: {
                  //map: this._map,
                  autoViewport: true

              },
              pageCapacity: 1,

  						onMarkersSet: false,
              onSearchComplete: function(results) {
                  if (this._local.getStatus() == BMAP_STATUS_SUCCESS) {
                      if (results.getCurrentNumPois() > 0) {
                          var firstPoi = results.getPoi(0).point;
                          var markerAnchor = new BMap.Point(firstPoi.lng, firstPoi.lat);
                          marker.setPosition(markerAnchor);
  												console.log("searched to");
  												console.log(marker.point);
  												this._map.panTo(marker.point);
                      }
                  }
              }.bind(this)
          };

          this._local = new BMap.LocalSearch(this._map, options);
      }


    render() {
        return (
            <div id = 'map' />
        );
    }
}


function mapStateToProps(state) {
    return {
    //    users: state.users,
        coords :state.coords
    };
}

//Get actions and pass them as props to to UserList
    // > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(BDMap);
