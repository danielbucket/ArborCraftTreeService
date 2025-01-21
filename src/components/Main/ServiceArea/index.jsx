import './index.style.css'
import ServiceAreaMap from './ServiceAreaMap'

export default function ServiceArea() {

  return (
    <div className='service-area-container card-body'>
      <p className='component-header'>Service Area</p>
      <div className="map-container">
        <p>Serving Golden, Colorado <br/>& Denvers western burbs.</p>
        <ServiceAreaMap />
      </div>
    </div>
  )
}