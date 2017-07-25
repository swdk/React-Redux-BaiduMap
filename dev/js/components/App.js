import React from 'react';
import CoordList from '../containers/coords-list';
import BDMap from '../containers/map';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Hello World</h2>
        <CoordList />
      <BDMap />
    </div>
);

export default App;
