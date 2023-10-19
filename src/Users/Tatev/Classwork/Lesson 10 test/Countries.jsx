

export default function Countries({countries, randomColor}) {
  return (
    <div>
      {
        countries.map((elem, index) => {
          return <h2 key={index} style={{backgroundColor: `${randomColor()}`}}>{elem}</h2>
        })
      }
    </div>
  )
}
