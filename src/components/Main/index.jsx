import './index.style.css'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import ServiceArea from './ServiceArea'

export default function Main() {

  return (
    <>
      <div className='main-container'>
        <About />
        <Portfolio />
        <Services />
        <ServiceArea />
      </div>
    </>
  )
}