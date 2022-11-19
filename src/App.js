import Cardd from "./components/card/Card";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MyNav from "./components/MyNav/MyNav";

function App() {
  const arr = [
    {
      feature: true,
      title: "Suzuki Alto VXR",
      price: "5,34,000",
      location: "North Nazimabad, Karachi",
      time: "5 days ago",
      imgSource:
        "https://www.drivespark.com/images/2017-01/maruti-alto-k10-exterior-5.jpg",
    },
    {
      feature: false,
      title: "motorolla Droid Z",
      price: "12,000",
      location: "North Nazimabad, Karachi",
      time: "3 days ago",
      imgSource:
        "https://fdn.gsmarena.com/imgroot/reviews/16/moto-z-force-droid-edition-review/lifestyle/-728w2/gsmarena_011.jpg",
    },
    {
      feature: false,
      title: "Football WC-2001",
      price: "4,000",
      location: "Naya Nazimabad, Karachi",
      time: "1 days ago",
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Adidas_soccer_ball_on_a_grass_pitch_%28Unsplash%29.jpg/1200px-Adidas_soccer_ball_on_a_grass_pitch_%28Unsplash%29.jpg",
    },
    {
      feature: true,
      title: "Suzuki Cultus VXRi",
      price: "9,37,000",
      location: "Shadman, Karachi",
      time: "1 day ago",
      imgSource:
        "https://m.atcdn.co.uk/vms/media/bc7f57c965634f6b866593c8f6db5eef.jpg",
    },
    {
      feature: false,
      title: "Kitchen Set",
      price: "34,000",
      location: "Nazimabad, Karachi",
      time: "2 days ago",
      imgSource:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creation-wood-n-stone-rural-cottage-wallpaper-15-99-per-roll-1531145066.jpg?crop=1.00xw:0.503xh;0,0.428xh&resize=1200:*",
    },
    {
      feature: false,
      title: "Suzuki Mehran VXR",
      price: "2,34,000",
      location: "North Nazimabad, Lahore",
      time: "10 days ago",
      imgSource:
        "https://static.pakwheels.com/2017/04/suzuki-mehran-vxr-euro-ii-2013-12064890.jpg",
    },
    {
      feature: false,
      title: "Toyotta Corolla",
      price: "15,34,000",
      location: "Wapda Town, Lahore",
      time: "2 days ago",
      imgSource:
        "https://www.hdcarwallpapers.com/walls/toyota_corolla_hybrid_2018_4k-HD.jpg",
    },
    {
      feature: true,
      title: "iPhone 13 pro max",
      price: "5,34,000",
      location: "North Nazimabad, Karachi",
      time: "5 days ago",
      imgSource: "https://i.ytimg.com/vi/RcGz5z0W1MQ/maxresdefault.jpg",
    },
    {
      feature: true,
      title: "Samsung Galaxy S12",
      price: "2,34,000",
      location: "North Nazimabad, Karachi",
      time: "5 days ago",
      imgSource:
        "https://staticsmartlife.mondo.rs/Picture/91648/jpeg/Samsung-Galaxy-A53-5G-Uzivo-9-.jpg?ts=2022-07-15T23:00:48",
    },
    {
      feature: true,
      title: "Foxy Vintage",
      price: "1,34,000",
      location: "Sadar, Karachi",
      time: "1 day ago",
      imgSource:
        "https://c4.wallpaperflare.com/wallpaper/592/326/448/retro-street-windows-home-wallpaper-preview.jpg",
    },
  ];
  return (
    <div>
      <MyNav />
      <div className="d-flex flex-row justify-content-around flex-wrap">
        {arr.map((cardElement) => {
          return (
            <Cardd
              feature={cardElement.feature}
              title={cardElement.title}
              price={cardElement.price}
              location={cardElement.location}
              time={cardElement.time}
              imgSource={cardElement.imgSource}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
