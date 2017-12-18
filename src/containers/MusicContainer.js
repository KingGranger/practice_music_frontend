import React from 'react';
import MusicList from '../components/MusicList'
import MusicSearch from '../components/MusicSearch'
import MusicInput from '../components/MusicInput'

export default class MusicContainer extends React.Component{
  state = {
    songs: [],
    search: '',
    newSong: ''
  }

  handleChange = (search) => {
    this.setState({ search: search.target.value})
  }

  handleSubmit = () => {
    // options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": 'application/json',
    //     "Accept": 'application/json'
    //   },
    //   body: JSON.stringify({beef: this.state.search})
    //
    // }
    // fetch('url', options)
    // .then
  }

  componentDidMount = () =>{
    fetch('http://localhost:3000/musics').then(res => res.json()).then(songs => this.setState({songs}))
  }

  // handleSubmit = target => {
  //   e.preventDefault()
  //   debugger;
  //   console.log(e.target)
  // }

  render(){
    //console.log(this.state.songs)
    console.log(this.state.search)
    return(
      <div>
        Music goes here
        <MusicSearch search={this.state.search}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
        />
        <MusicList songs={this.state.songs}/>
        <MusicInput />
      </div>
    )
  }
}
