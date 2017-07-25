import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPoint} from '../actions/index';
import Point from './point';
import { Button, FormControl, ControlLabel, Form, FormGroup } from 'react-bootstrap';


class BDMap extends Component {

//react components
  componentDidMount() {
              //initilase map
            this._map = new BMap.Map('map');
         var point = new BMap.Point(this.props.coords.lng,this.props.coords.lat)
              //   console.log(point);
            this._map.centerAndZoom(point, 17); // 初始化地图，设置中心点坐标和地图级别
            this._map.addControl(new BMap.NavigationControl());
            this._map.addControl(new BMap.ScaleControl());
            this._map.addControl(new BMap.OverviewMapControl());
            this._map.addControl(new BMap.MapTypeControl());
            this._map.setCurrentCity('北京'); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

            //add marker to Map
            var marker = new BMap.Marker(point);
            this._map.addOverlay(marker);
            marker.enableDragging();
            marker.addEventListener('dragend', function(e) {
              //calling redux action here
              this.props.selectPoint(e.point);
    						console.log("draged to");
    						console.log(marker.point);
    						this._map.panTo(e.point);
            }.bind(this));


            //serach option for map
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
                          //  console.log("searched ",searchText);
                            console.log(marker.point);
                            this._map.panTo(marker.point);
                            this.props.selectPoint(marker.point);
                        }
                    }
                }.bind(this)
            };
        this._local = new BMap.LocalSearch(this._map, options);
        }


        //custom function to connect with baidumap serach component
        _handleChange(evt) {
            this._local.search(evt.target.value);
        }

    render(){
            //form controlling the map
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


//getting redux state to this.props
function mapStateToProps(state) {
    return {
        coords :state.coords,
    };
}

//binding select point function to actions
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPoint: selectPoint}, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(BDMap);
