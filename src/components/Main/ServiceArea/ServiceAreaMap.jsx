import { Loader } from '@googlemaps/js-api-loader';
import icon from '../../../assets/images/tree_logo.png';
import { mapCenter, goldenCoordinates, mapAreaCoordinates } from './mapData';
const key = process.env.VITE_GMAPS_KEY || import.meta.env.VITE_GMAPS_KEY;

export default function ServiceAreaMap() {
  const loader = new Loader({
    apiKey: key,
    version: 'weekly',
  })

  const markerIcon = document.createElement('img');
    markerIcon.src = icon;
    markerIcon.alt="tree logo";
    markerIcon.style.height = "5em";
    markerIcon.style.width = "5em";

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 10,
      mapId: "GOLDEN_CO_MAP",
      disableDefaultUI: true,
    });

    const serviceArea = new google.maps.Polygon({
      path: mapAreaCoordinates,
      strokeColor: "#9FCFCA",
      strokeOpacity: 0.8,
      strokeWeight: 2.5
    });

    const marker = new AdvancedMarkerElement({
      position: goldenCoordinates,
      map: map,
      title: 'Golden, Colorado',
      content: markerIcon
    });

    serviceArea.setMap(map);
  });

  return (
    <div id="map" className="map-wrapper"></div>
  );
};