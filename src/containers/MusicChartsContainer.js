import React, {Component} from 'react';
import Top20List from '../components/Top20List';
import SongDetails from '../components/SongDetails';

class MusicChartsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            selectedSong: null
         }

         this.selectSong = this.selectSong.bind(this);
    }

    componentDidMount() {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
        fetch(url)
            .then( (res) => res.json() )
            .then( (songs) => {
                this.setState( {songs} );
            });
    }

    selectSong(selectedIndex) {
        const selectedSong = this.state.songs[selectedIndex];
        this.setState({selectedSong});
    }

    render() {
        return (
            <div id="charts-container">
                <h1>Music Charts</h1>
                <Top20List songs={this.state.songs} />
            </div>
         );
    }
}

export default MusicChartsContainer;

// TODO song needs id, artist name and title
