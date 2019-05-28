import React, {Component} from 'react';
import SongDetails from "./SongDetails";

class Top20List extends Component {

  render(){

    const songListNodes = this.props.state.songs.map(song => {
      return(
        <SongDetails artist={song['im:artist'].label} key={song.id['im:id']} title={song['im:name'].label}/>
      );
    })

    return(
      <div className = "top-20-list">
        {songListNodes}
      </div>
    );
  }
}
export default Top20List;
