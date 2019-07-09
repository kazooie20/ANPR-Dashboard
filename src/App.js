import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import Navbar from "./components/Navbar.jsx";
import DangerCard from "./components/Card/DangerCard.jsx";
import WarningCard from "./components/Card/WarningCard.jsx";
import SuccessCard from "./components/Card/SuccessCard.jsx";
import Sidebar from "./components/Sidebar.jsx"
import Loader from "./components/Loader.jsx"
import EventCard from "./components/Card/EventCard";
import EventTable from "./components/EventTable"



//Default Query
//const DEFAULT_QUERY = 'redux';

class App extends Component {

  constructor() {
    super();
    this.state = {
      header: "Dashboard",
      eventCount: 0,
      Events: [],
      isLoading: false,
      API:'./lib/EventJson/testData2.json', 
    };
  }

  componentDidMount() {
    this.getEvent();
    //this.timer = setInterval(() => this.getEvent(), 20000);
  }

  getEvent = () => {
    this.setState({ isLoading: true});
    fetch(this.state.API)
      .then(results => { return results.json(); })
      .then(data => {
        
        var num = data.results.length;
        let Events = data.results.map((eve) => {
          return (
            {
              datetime: eve.dateTime ,
              location: eve.location,
              image: <img src={eve.image} />,
              manifest: eve.manifest,
            }
          )

        })
        
        this.setState({ Events: Events, isLoading: false, eventCount: num });
        console.log("Fetch");
      })
  }

  render() {
    
    const { Events, isLoading } = this.state;

    if (isLoading) {
      return (
        <Loader />
      );
    }

    return (
      <div className="App">
        <Navbar />
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Overview</li>
              </ol>
              <div className="row">
                <EventCard eventCount={this.state.eventCount} />
                <WarningCard />
                <SuccessCard />
                <DangerCard />
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-table" />
                  Events
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="dataTable_wrapper"
                      className="dataTables_wrapper dt-bootstrap4"
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <EventTable EventProp={this.state.Events} API={this.state.API} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted" />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

var ALLevents = [];

function getCurrDate() {
  var d = new Date(),
    dformat =
      [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
  return dformat;
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function DisplayEvery30Seconds() {
  var myInt = setInterval(function () {
    var dataToSend = [
      { fieldname: "dateTime" },
      { fieldname: "location" },
      { fieldname: "image" },
      { fieldname: "manifest" }
    ];
    dataToSend = JSON.stringify({ list: dataToSend });
    $.ajax({
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type: "GET",
      url: "lib/EventJson/testData2.json",

      data: dataToSend,
      success: function (data) {
        $("#myTable tr").remove();

        EventAdapter.numInstances = 0;

        var myArr = data;
        var i;
        for (i = 0; i < myArr.length; i++) {
          let myevent = new EventAdapter(
            myArr[i].dateTime,
            myArr[i].location,
            myArr[i].image,
            myArr[i].manifest
          );

          myevent.addEvent();
          var element = document.getElementById("event_counter");
          var text = "Event Counter: " + myevent.counter();
          element.innerHTML = text;
        }
      }
    });
  }, 10000);
}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status === "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});

function readFirstTime() {
  var dataToSend = [
    { fieldname: "dateTime" },
    { fieldname: "location" },
    { fieldname: "image" },
    { fieldname: "manifest" }
  ];
  dataToSend = JSON.stringify({ list: dataToSend });
  $.ajax({
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    type: "GET",
    url: "lib/EventJson/testData2.json",

    data: dataToSend,
    success: function (data) {
      $("#myTable tr").remove();

      EventAdapter.numInstances = 0;

      var myArr = data;
      var i;
      for (i = 0; i < myArr.length; i++) {
        let myevent = new EventAdapter(
          myArr[i].dateTime,
          myArr[i].location,
          myArr[i].image,
          myArr[i].manifest
        );

        myevent.addEvent();
        var element = document.getElementById("event_counter");
        var text = "Event Counter: " + myevent.counter();
        element.innerHTML = text;
      }
    }
  });
}

function main() {
  readFirstTime();
}

class EventAdapter {
  constructor(dt, loc, img, num_p) {
    this.datetime = dt;
    this.location = loc;
    this.image = img;
    this.manifest = num_p;
  }

  addEvent() {
    const newEve2 = new NewEvent();
    return newEve2.display(
      this.datetime,
      this.location,
      this.image,
      this.manifest
    );
  }

  getEvent() { }

  counter() {
    EventAdapter.numInstances = (EventAdapter.numInstances || 0) + 1;
    return EventAdapter.numInstances;
  }
}

class NewEvent {
  constructor(dt, loc, img, num_p) {
    this.datetime = getCurrDate();
    this.location = loc;
    this.img = img;
    this.manifest = num_p;

    this.display = function (dt, loc, img, num_p) {
      var myImage = new Image(250, 140);
      myImage.src = img;
      var table = document.getElementById("dataTable");
      var row = table.insertRow(1);
      var cell_DateTime = row.insertCell(0);
      var cell_Location = row.insertCell(1);
      var cell_Image = row.insertCell(2);
      var cell_Manifest = row.insertCell(3);
      cell_DateTime.innerHTML = dt;
      cell_Location.innerHTML = loc;
      cell_Image.append(myImage);
      cell_Manifest.innerHTML = num_p;
      console.log("Adding new row....");
    };
  }
}

class Event {
  constructor(dt, loc, img, num_p) {
    this.dateTime = getCurrDate();
    this.location = loc;
    this.image = img;
    this.manifest = num_p;
  }
  addEvent() {
    var myImage = new Image(250, 140);
    myImage.src = this.image;
    var table = document.getElementById("dataTable");
    var row = table.insertRow(1);
    var cell_DateTime = row.insertCell(0);
    var cell_Location = row.insertCell(1);
    var cell_Image = row.insertCell(2);
    var cell_Manifest = row.insertCell(3);
    cell_DateTime.innerHTML = this.dateTime;
    cell_Location.innerHTML = this.location;
    cell_Image.append(myImage);
    cell_Manifest.innerHTML = this.manifest;
    console.log("Adding new row....");
  }

  getEvent() { }

  counter() {
    EventAdapter.numInstances = (EventAdapter.numInstances || 0) + 1;
    return EventAdapter.numInstances;
  }
}
