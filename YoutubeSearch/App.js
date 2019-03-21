import React from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import AppHeader from './components/Header';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyBpf9ValcW1tUV3N9NoSElyyrfQsxqSwSA';

export default class App extends React.Component {

  state = {
    loading: false,
    videos: []
  }

  componentWillMount() {
    this.searchYT('Pewdiepie');
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({loading: true});
    YTSearch({key : API_KEY, term}, videos => {
      console.log(videos);
      this.setState({
        loading: false,
        videos
      });
    });
  }

  render() {

    const {loading, videos} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>

          <AppHeader />

        <SearchBar 
        loading = {loading}
        onPressSearch={this.onPressSearch} />

        <VideoList videos = {videos} />

      </View>
    );
  }
}
