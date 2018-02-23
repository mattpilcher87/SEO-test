import React, { Component } from 'react'

class QuickLook extends Component {
  render() {
    return (
        <div className="container py-5">
          {this.props.showLoader &&
            <div className="row py-5 text-center">
              <div className="col-md-12">
                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#0275d8">
                  <circle cx="15" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15"
                      begin="0s" dur="0.8s"
                      values="15;9;15" calcMode="linear"
                      repeatCount="indefinite" />
                      <animate attributeName="fillOpacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                      <animate attributeName="r" from="9" to="9"
                        begin="0s" dur="0.8s"
                        values="9;15;9" calcMode="linear"
                        repeatCount="indefinite" />
                      <animate attributeName="fillOpacity" from="0.5" to="0.5"
                        begin="0s" dur="0.8s"
                        values=".5;1;.5" calcMode="linear"
                        repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                      <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                      <animate attributeName="fillOpacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
                    </circle>
                  </svg>
              </div>
            </div>
          }
          {this.props.showContent && !this.props.isCarousel &&
            <div className="row">
              <div className="col-md-12">
                <h4 className="heading">Quick Look</h4>
              </div>
              <div className="col-md-12">
                <div className="quick-look--container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel1.jpg" />
                        <h5 className="mb-0">CHESSINGTON RESORT HOTELS</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel2.jpg" />
                        <h5 className="mb-0">CHESSINGTON GLAMPING</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel3.jpg" />
                        <h5 className="mb-0">HOLIDAY INN FARNBOROUGH</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel1.jpg" />
                        <h5 className="mb-0">CHESSINGTON RESORT HOTELS</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel2.jpg" />
                        <h5 className="mb-0">CHESSINGTON GLAMPING</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel3.jpg" />
                        <h5 className="mb-0">HOLIDAY INN FARNBOROUGH</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel1.jpg" />
                        <h5 className="mb-0">CHESSINGTON RESORT HOTELS</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel2.jpg" />
                        <h5 className="mb-0">CHESSINGTON GLAMPING</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="quick-card--container">
                        <img className="quick-card--img" src="./img/hotel3.jpg" />
                        <h5 className="mb-0">HOLIDAY INN FARNBOROUGH</h5>
                        <p>(Based on 2 adults 2 children)</p>
                        <button className="btn btn-primary">FROM £221</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {this.props.showContent && this.props.isCarousel &&
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="quick-look--container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel1.jpg" />
                          <h5 className="mb-0">CHESSINGTON RESORT HOTELS</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel2.jpg" />
                          <h5 className="mb-0">CHESSINGTON GLAMPING</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel3.jpg" />
                          <h5 className="mb-0">HOLIDAY INN FARNBOROUGH</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="quick-look--container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel1.jpg" />
                          <h5 className="mb-0">CHESSINGTON RESORT HOTELS</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel2.jpg" />
                          <h5 className="mb-0">CHESSINGTON GLAMPING</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel3.jpg" />
                          <h5 className="mb-0">HOLIDAY INN FARNBOROUGH</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="quick-look--container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel1.jpg" />
                          <h5 className="mb-0">CHESSINGTON RESORT HOTELS</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel2.jpg" />
                          <h5 className="mb-0">CHESSINGTON GLAMPING</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="quick-card--container">
                          <img className="quick-card--img" src="./img/hotel3.jpg" />
                          <h5 className="mb-0">HOLIDAY INN FARNBOROUGH</h5>
                          <p>(Based on 2 adults 2 children)</p>
                          <button className="btn btn-primary">FROM £221</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          }
        </div>
    )
  }
}

export default QuickLook
