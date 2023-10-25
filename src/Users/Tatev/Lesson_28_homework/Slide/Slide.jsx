import Slider from "react-slick";
import "./Slide.css"


export default function Slide({datas}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  }
  return (
    <div>
      <Slider {...settings}>
        {datas.map(data => {
          return(
            <div key ={data.id}>
              <img src={data.image} alt={data.title} />
              <h3>{data.title}</h3>
              <p>{data.item}</p>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
