import Dog from './Dog';

function Dogs() {

  let dogs = [
    {
      name: "Max",
      description: "Max is a playful dog",
      breed: "Golden Retriever"
    },
    {
      name: "Vito",
      description: "Vito is a small dog that always likes to sleep",
      breed: "Chihuahua"
    },
    {
      name:"German Tequila",
      description: "This dog will get you Engineerly Drunk AF",
      breed: "German Shepperd"
    },
    {
      name:"French Vodka",
      description: "Cold but Arrogant",
      breed: "Rot Whiler"
    },
    {
      name:"American Scotch",
      description: "Tries to be Wisky but burbs on",
      breed: "Bernaise Doodle"
    },
    {
      name:"Venezuelan Sake",
      description: "He eats the Arepas, for God's SAKE",
      breed: "Pit Bull"
    },
    {
      name:"Chinese Fernet",
      description: "This dog will get you Engineerly Drunk AF",
      breed: "Great Dane"
    }
  ]

  return (
    <div style={{justifyContent: 'center'}}>
      { dogs && dogs.map((dog) => {
        return <Dog singleDog={dog} />
      })}
    </div>
  )
}

export default Dogs;