import React from "react";
import Map from "./Map";

function Home() {
  return (
    <div className="page-style">
      <div className="title-map">
        {/* homepage, display main map */}
        <Map center={[44.4846044523956, -73.2101595440981]} zoom={13} />
      </div>
      {/* empty div to keep styling consistent */}
      <div className='info-panel'>
      </div>
    </div>
  );
}

export default Home;
