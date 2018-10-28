import React from 'react'
import VideoListItem from './videoListItem'

const VideoList = props => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.map((video, index) => {
        return (
          <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
          />
        )
      })}
    </ul>
  )
}

export default VideoList
