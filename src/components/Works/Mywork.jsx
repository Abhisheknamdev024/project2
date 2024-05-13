import "./Mywork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import work_data from "../../assets/mywork_data"
import mywork_data from "../../assets/mywork_data"
import arrow from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,id)=>{
                return <img key={id} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork_showmore">
            <p>Show more</p>
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default Mywork