import React from 'react';
import CoordList from '../containers/coords-list';
import UserDetails from '../containers/user-detail';
import BDMap from '../containers/map';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <CoordList />


             <BDMap />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
