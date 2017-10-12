import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((currentVideo) => {
        return (
            <VideoListItem onVideoSelect = {props.onVideoSelect} 
                key={currentVideo.etag} 
                video={currentVideo}/>
        )
    });
    return (
        <ul className="col-md-4 list-group">
           {videoItems}
        </ul>
    );
}

export default VideoList;