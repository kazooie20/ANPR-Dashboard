import React, { Component } from 'react'

export default class WarningCard extends Component {
  render() {
    return (
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="card text-white bg-warning o-hidden h-100">
          <div className="card-body">
            <div className="card-body-icon">
              <i />
            </div>
            <div className="mr-5" />
          </div>
        </div>
      </div>
    )
  }
}
