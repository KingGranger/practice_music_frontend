import React from 'react';

export default class MusicSearch extends React.Component{

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit()
    }

  render(){
    // console.log(this.props)

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder="Find your favorite song!" value={this.props.search} onChange={this.props.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
