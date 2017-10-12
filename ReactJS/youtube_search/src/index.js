import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY='enter_your_key_here';



class App extends Component{
    constructor(props) {
        super(props);
        this.state = { videos : [], selectedVideo : null };
        this.videoSearch('RectJs');
    }

    videoSearch(searchTerm) {
        YTSearch({ key:API_KEY, term: searchTerm},(videos)=> {
            console.log(videos);
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange = { (searchedTerm) => this.videoSearch(searchedTerm) } />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
             </div>  
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));