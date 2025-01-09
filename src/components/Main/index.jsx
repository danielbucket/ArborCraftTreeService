import './index.style.css'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'

export default function Main() {
  return (
    <>
      <div className='main-container'>
        <About />
        <Portfolio />
        <Services />
      </div>
    </>
  )
}