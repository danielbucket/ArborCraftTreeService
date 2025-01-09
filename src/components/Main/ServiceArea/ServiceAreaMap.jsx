import { Loader } from '@googlemaps/js-api-loader';
import mapIcon from '../../../assets/logos/tree_logo.png';
import { mapCenter, goldenCoordinates, mapAreaCoordinates } from './gmapsCoordinates.js';

export default function ServiceAreaMap() {
  const KEY = import.meta.env.REACT_APP_VITE_GMAPS_API;
  const loader = new Loader({
    apiKey: KEY,
    version: "weekly"
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');;

    const markerIcon = document.createElement('img');
      markerIcon.src = mapIcon;
      markerIcon.style.height = "5em";
      markerIcon.style.width = "5em";
    
    const map = new Map(document.getElementById('service-area-map'), {
      zoom: 10,
      center: mapCenter,
      mapId: 'GOLDEN_CO_MAP',
      disableDefaultUI: true,
    });

    const serviceArea = new google.maps.PolyLine({
      path: mapAreaCoordinates,
      geodesic: true,
      strokeColor: '#594A42',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: goldenCoordinates,
      content: markerIcon,
    });

    serviceArea.setMap(map);
  })
};