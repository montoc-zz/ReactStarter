import React, { Component } from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchBar'
const API_KEY = 'AIzaSyB1l4i0HZxFMrmvONf8S2JAYSBlosW9a3s'
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboard')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300)
  
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo })
          }}
        />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#app'))
