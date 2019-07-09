import React, { Component } from 'react'
import $ from "jquery";
import ReactDOM from 'react-dom'
import { MDBDataTable } from 'mdbreact';



export default class EventTable extends Component {

  constructor() {
    super();
  
  }

  render() {
   

    const data = {
      columns: [
        {
          label: 'DateTime',
          field: 'datetime',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Location',
          field: 'location',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Image',
          field: 'image',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Manifest',
          field: 'manifest',
          sort: 'asc',
          width: 100
        }
      ],
      rows: this.props.EventProp
    };

    return (
      <div>
        <MDBDataTable
          bordered 
          data={data}
        />

      </div>


    )
  }
}
