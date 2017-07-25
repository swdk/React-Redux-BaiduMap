import React from 'react';
import CoordList from '../containers/coords-list';
import BDMap from '../containers/map';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>React Redux Baidu Map</h2>
        <h3>https://github.com/swdk/React-Redux-BaiduMap</h3>
        <CoordList />
      <BDMap />
    </div>
);

export default App;
