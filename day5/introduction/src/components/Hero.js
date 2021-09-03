import './Hero.css';

function Hero({user}) {
  // constants

  console.log(user);

  // JSX
  return (
    <div className="hero-box">
      <img
        className="hero-image"
        src={user.img}
        alt="Hero Image" 
      />

      <p>This is {user.name}'s Hero</p>
      <p>{user.description}</p>
      <button>Check {user.heroName}</button>
    </div>
  )
}

export default Hero;