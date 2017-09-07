import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { 
        albums: [] 
    };

    componentWillMount() {
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>   
            //Key should be a unique identifier of each item
            //Ideally, an 'id' is usually the best key if you have one
        <AlbumDetail key={album.title} album={album} />
    );
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
            {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
