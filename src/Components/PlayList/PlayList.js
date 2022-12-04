import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    render(){
        return(
            <div className="Playlist">
                <input defaultvalue= {"sample"} placeholder={this.props.playlistName}/>
                <TrackList results={this.props.playlistTracks}/> 
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;