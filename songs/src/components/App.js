import React from 'react';
import SongsList from './songsList';
import SongDetail from './songDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongsList />
                </div>
                <div className="column eight wide">
                <SongDetail />
            </div>
            </div>

        </div>
    );
};

export default App;