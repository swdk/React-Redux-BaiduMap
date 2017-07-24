import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPoint} from '../actions/index';
import Point from './point';
import { Button, FormControl, ControlLabel, Form, FormGroup } from 'react-bootstrap';


class BDMap extends Component {




  componentDidMount() {


  console.log("hi");
    console.log("what",this.props.serachedtextfromstate);
            this._map = new BMap.Map('map');
         var point = new BMap.Point(this.props.coords.lng,this.props.coords.lat)
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
              //  this.addMarker(e.point);
              this.props.selectPoint(e.point);
              //  this.props.selectPoint(marker.point);
    						console.log("draged to");
    						console.log(marker.point);
    						this._map.panTo(e.point);
            }.bind(this));
            var options = {
                renderOptions: {
                //   map: this._map,
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
                          //  console.log("searched to",searchText);
                            console.log(marker.point);
                            this._map.panTo(marker.point);
                            this.props.selectPoint(marker.point);
                        }
                    }
                }.bind(this)
            };
        this._local = new BMap.LocalSearch(this._map, options);

        }

        _handleChange(evt) {

          //  this.setState({ serachedtextfromstate: evt.target.value });
            //  console.log();
            this._local.search(evt.target.value);
        }

    render(){
        return (
          <div>

            <Form inline>
                  <FormGroup controlId="formInlineName" width={'100%'}>
                      <ControlLabel>输入省、直辖市或县名称：</ControlLabel>
                      {' '}
                      <FormControl type="text"  value={this.props.searchedtextfromstate} placeholder="北京" onChange={this._handleChange.bind(this)}/>
                  </FormGroup>
                  {' '}

              </Form>
                <div id = 'map' />
            < /div>

        );
    }



}



function mapStateToProps(state) {
    return {
    //    users: state.users,
        coords :state.coords,
      //  serachedtextfromstate :state.serachedtextfromstate
    };
}

//Get actions and pass them as props to to UserList
    // > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPoint: selectPoint}, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(BDMap);
