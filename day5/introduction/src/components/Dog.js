function Dog({singleDog}) {

  // console.log("Anonnymous obj here", dog);

  return (
    <>
      <h2>{singleDog.name}</h2>
      <p>{singleDog.description}</p>
      <p>{singleDog.breed}</p>
    </>
  )
}

export default Dog;