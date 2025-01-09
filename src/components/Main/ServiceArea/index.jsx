import ServiceAreaMap from './ServiceAreaMap.jsx';
import './index.style.css';

export default function ServiceArea() {

  return (
    <>
      <div className="map-container" id='serviceMap'>
        <ServiceAreaMap />
      </div>
    </>
  )
}