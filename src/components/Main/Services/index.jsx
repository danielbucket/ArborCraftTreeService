import './index.style.css'

export default function Services() {

  return (
    <>
      <div className="services-container card-body">
        <p className='component-header'>Our Services</p>
        <div className="services-list">
          {
            servicesStub.map((service,i) => {
              return (
                <div key={i} className="service-card">
                  <h2>{service.header}</h2>
                  <p>{service.body}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

const servicesStub = [
	{
		header: "Pruning:",
		body: "Pruning typically involves removing dead or diseased wood and thinning out stems and branches.",
	},
	{
		header: "Trimming:",
		body: "Trimming involves removal of other plant material in order to promote healthy growth.",
	},
	{
		header: "Removals:",
		body: "A tree will often need to be removed for various reasons including diseases, infections, or damage.",
	},
	{
		header: "Planting:",
		body: "We love planting new trees. Many factors (i.e. soil, sunlight, building proximity, and surrounding space) should be considered when planting a new tree.",
	},
	{
		header: "Nutrition:",
		body: "We provide deep root watering, and trunk injections using modern specialized equipment and high quality nutrients that target the specific needs of your tree.",
	},
];