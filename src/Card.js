import './Card.css'

export default function Card({ name, images, types }) {
  return (
    <section className="Card">
      <h2>{name.replace(/^./, name[0].toUpperCase())}</h2>
      <ul className="Card__typeList">
        {types.map(type => {
          return <li key={type}>{type.replace(/^./, type[0].toUpperCase())}</li>
        })}
      </ul>
      <img src={images.front} alt="" />
      <img src={images.back} alt="" />
    </section>
  )
}
