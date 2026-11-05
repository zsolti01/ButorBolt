import './card.css'

export default function Card({imgUrl, title}) {
  return (
    <>
    <div className='cards'>
        <img src={imgUrl} alt={title} />
        <p>{title}</p>
        <button>Tovább</button>
    </div>
    </>
  )
}
