import React, { Component } from 'react'

import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import QuickLook from '../components/QuickLook.jsx'
import Footer from '../components/Footer.jsx'

class Base extends Component {

  constructor(){
    super()
    this.state=({
      showLoader: false,
      showContent: false
    })
    this.showContent = this.showContent.bind(this)
  }

  showContent() {
    this.setState({
      showLoader: true,
      showContent: false
    })

    setTimeout(() => {
      this.setState({
        showLoader: false,
        showContent: true
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        <Header />
        <HeroBanner selectDropdown={this.showContent} />
        <QuickLook showContent={this.state.showContent} showLoader={this.state.showLoader} isCarousel={false}/>
        <Footer />
      </div>
    )
  }
}

export default Base
