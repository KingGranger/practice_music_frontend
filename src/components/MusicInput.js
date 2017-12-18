import React from 'react';

export default class MusicInput extends React.Component{


  render(){
    return(
      <div>
        <form>
          <input type='text' name='newSong' />
        </form>
      </div>
    )
  }
}
