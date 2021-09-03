import Hero from "./Hero";
import "./Heros.css";

function Heros() {
  const users = [
    {
      name: "Salsicha",
      description: "Rica y Sabrosa",
      heroName: "Super Salchicha",
      img: "https://previews.123rf.com/images/curvabezier/curvabezier1707/curvabezier170700071/81868450-ilustraci%C3%B3n-de-dibujos-animados-de-hot-dog-super-h%C3%A9roe-de-pie-con-cabo.jpg",
    },

    {
      name: "Alvin",
      description: "Deadpool is an anti-hero",
      heroName: "Deadpool",
      img: "https://www.looper.com/img/gallery/what-marvel-wants-you-to-forget-about-deadpool/intro-1518721486.jpg",
    },

    {
      name: "Andriw",
      description:
        "Starlord is a god/human superhero from Guardians of the Galaxy",
      heroName: "Peter Quill",
      img: "https://www.syfy.com/sites/syfy/files/guardiansofthegalaxytelltalegames-01_3.jpg",
    },
  ];

  return (
    <div className="heros-container">

      <Hero user={users[0]} />
      <Hero user={users[1]} />
      <Hero user={users[2]} />
      
    </div>
  );
}

export default Heros;
