import React from 'react';
import ConnectedList from './List';
import ConnectedSearch from './Search';

class AdminForm extends React.Component {
    render () {
        return (
            <div className="AdminForm">
                <ConnectedSearch />
                <ConnectedList />
            </div>
        );
    }
}

export default AdminForm;