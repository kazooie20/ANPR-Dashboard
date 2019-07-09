import React, { Component } from 'react'

export default class EventCard extends Component {
    render() {
        return (
            <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fas fa-fw fa-car" />
                        </div>
                        <div className="mr-5" id="event_counter">
                            Event Counter: {this.props.eventCount}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
