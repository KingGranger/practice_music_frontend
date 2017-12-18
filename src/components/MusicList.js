import React from 'react';

export default class MusicList extends React.Component{


  render(){
    const songs = this.props.songs.map((song, id) => <li key={id+1}>{song.name}</li>)
    return(
      <div>
        {songs}
      </div>
    )
  }
}
