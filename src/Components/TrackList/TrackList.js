import React from 'react';

import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {

    render(){

        return (
            <div className="TrackList">
                {
                    this.props.results.map( result => {
                        return <Track track={result} key={result.id} onAdd={this.props.onAdd}/>
                    }
                    )
                }
            </div>
        );
    }
}

export default TrackList;