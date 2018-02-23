import React, { Component } from 'react'

import SearchForm from './SearchForm.jsx'

class HeroBanner extends Component {
  render() {
    return (
      <div className="hero-banner">
        <SearchForm selectDropdown={this.props.selectDropdown}/>
      </div>
    )
  }
}

export default HeroBanner
