import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

class SearchForm extends Component {

  constructor() {
    super()
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);

  }

  handleStartChange(date) {
    this.props.selectDropdown()
    this.setState({
      startDate: date
    });
  }

  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div className="search-form--container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
                className="form-control"
              />
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleEndChange}
                className="form-control"
              />
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Party Comp
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">1 Adult - 1 Child</a>
                  <a className="dropdown-item" href="#">2 Adult - 2 Child</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm
