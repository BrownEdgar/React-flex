import Slider from "react-slick";
import "./AutoSlide.scss";

export default function AutoSlide() {
  const settingsAutoPlay = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="AutoSlide">
      <div className="AutoSlide__container">
        <Slider {...settingsAutoPlay}>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/60986d8f6fba6224182c858a/e631e03b-d080-4e8d-8eb1-b71c17a44f6c/netflix.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/original-samsung-logo-10.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets-global.website-files.com/5a25950a9058c30001ce33a9/636c31dcf606bd0fd5c9428c_Visa.png"
              alt=""
            />
          </div>
          <div>
            <img src="https://wallpapercave.com/wp/wp3377102.png" alt="" />
          </div>
          <div>
            <img
              src="https://static.cdnlogo.com/logos/f/74/facebook-3.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
