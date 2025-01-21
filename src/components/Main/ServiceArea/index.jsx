import './index.style.css'
import { APIProvider, Map } from '@vis.gl/react-google-maps';
const GmapsKey = import.meta.env.VITE_GMAPS_API
import { mapCenter, goldenCoordinates, mapAreaCoordinates } from './mapData'

export default function ServiceArea() {
  const statement = `Serving Golden, Colorado, and Denver's western 'burbs`

  return (
    <div className='service-area-container card-body'>
      <p className='component-header'>Service Area</p>
      <div className="map-container">
        <p>Serving Golden, Colorado <br/>& Denvers western burbs.</p>
        <APIProvider
          apiKey={GmapsKey}
          onLoad={() => console.log('maps loaded')}>
          <Map className='google-map'
            defaultZoom={13}
            defaultCenter={mapCenter}
            onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }>
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}