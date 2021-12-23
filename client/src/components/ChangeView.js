import { useMap } from "react-leaflet";

// helper function that uses built in react-leaflet hooks to change map center
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default ChangeView;
