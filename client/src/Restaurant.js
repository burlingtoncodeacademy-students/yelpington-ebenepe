import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import Map from "./components/Map";

function Restaurant(props) {
  // initialize variables for useState
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hours, setHours] = useState("");
  const [loc, setLoc] = useState([44.4846044523956, -73.2101595440981]);
  const [notes, setNotes] = useState([]);

  // grab restaurant id from url
  let id = useLocation().pathname.split("/")[2];

  // variable to check whether URL changes based on react-router's useLocation function
  const location = useLocation();

  // upon URL change, fetch new JSON file and parseInfo()
  useEffect(() => {
    fetch("/api/" + id)
      .then((res) => res.json())
      .then(parseInfo);
  }, [location]);

  // helper function to parse info from json pulled above
  function parseInfo(info) {
    // combine lat and long from json into one array
    let coords = [info.lat, info.long];

    // setting props to be displayed
    setLoc(coords);
    setName(info.name);
    setAddress(info.address);
    setPhone(info["phone number"]);
    setHours(info.hours);
    setNotes(info.notes[0] + ", " + info.notes[1]);
  }

  return (
    // divs are for styling purposes
    <div className='page-style'>
      <div className='title-map'>
        {/* display all restaurant info & correctly oriented map */}
        <Map center={loc} zoom={18} />
      </div>
      <div className='info-panel'>
        <h2>{name}</h2>
        <ul>
          <li><b>Address: </b>{address}</li>
          <li><b>Phone Number: </b>802-{phone}</li>
          <li><b>Hours: </b>{hours}</li>
          <li><b>Notes: </b>{notes}</li>
        </ul>
      </div>
    </div>
  );
}

export default Restaurant;
