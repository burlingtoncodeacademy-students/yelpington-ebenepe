import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import ChangeView from "./ChangeView"

//  need to add markers to map, change props.center
function Map(props) {

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      style={{ height: "600px", width: "600px" }}
    >
      {/* ChangeView function allows map center to be dynamically changed */}
      <ChangeView center={props.center} zoom={props.zoom} />
      {/* displaying marker on map */}
      <Marker
        key="bluebird-barbeque"
        position={[44.48806221332021, -73.19526344056587]}
      >
        {/* creating popup on click */}
        <Popup>
          {/* popup contains link to appropriate restaurant page */}
          <Link to="/restaurant/bluebird-barbeque">Bluebird Barbeque</Link>
        </Popup>
      </Marker>
      <Marker
        key="henry-st-deli"
        position={[44.48418549699407, -73.20515208475838]}
      >
        <Popup>
          <Link to="/restaurant/henry-st-deli">Henry St. Deli</Link>
        </Popup>
      </Marker>
      <Marker key="kismayo" position={[44.489263117328875, -73.20127475459914]}>
        <Popup>
          <Link to="/restaurant/kismayo">Kismayo</Link>
        </Popup>
      </Marker>
      <Marker key="pho-hong" position={[44.48894262636787, -73.20695698292319]}>
        <Popup>
          <Link to="/restaurant/pho-hong">Pho Hong</Link>
        </Popup>
      </Marker>
      <Marker key="poppy-cafe" position={[44.49016655019588, -73.209807826719]}>
        <Popup>
          <Link to="/restaurant/poppy-cafe">Poppy Cafe and Market</Link>
        </Popup>
      </Marker>
      <Marker
        key="saigon-kitchen"
        position={[44.48489487701935, -73.21741389827889]}
      >
        <Popup>
          <Link to="/restaurant/saigon-kitchen">Saigon Kitchen</Link>
        </Popup>
      </Marker>
      <Marker
        key="shinjuku-station"
        position={[44.48506961349075, -73.21177154243121]}
      >
        <Popup>
          <Link to="/restaurant/shinjuku-station">Shinjuku Station</Link>
        </Popup>
      </Marker>
      <Marker
        key="taco-gordo"
        position={[44.48614206478985, -73.20990112894366]}
      >
        <Popup>
          <Link to="/restaurant/taco-gordo">Taco Gordo</Link>
        </Popup>
      </Marker>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Map;
