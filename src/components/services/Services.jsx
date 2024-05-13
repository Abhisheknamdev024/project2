import "./Services.css"
import themme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const Services = () => {
  return (
    <div id="service" className="services">
        <div className="services-title">
            <h1>MY SERVICES</h1>
            <img src={themme_pattern} alt="theme" />
        </div>
            <div className="servies-container">
                {services_data.map((service,id)=>{
                    return <div key={id} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services_readmore">
                            <p>Read more</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
    </div>
  )
}

export default Services