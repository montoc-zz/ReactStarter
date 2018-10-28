import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state ={
      term: ''
    }
  }

  onInputChange = e => {
    this.setState({term: e.target.value})
    this.props.onSearchTermChange(e.target.value)
  }

  render(){
    return(
      <div className='search-bar'>
        <input 
        value={this.state.term}
        onChange={this.onInputChange}
        style={{border:'1px solid green'}}
        />
      </div>
    )
  }
}

export default SearchBar