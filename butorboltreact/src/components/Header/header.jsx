import './header.css'

export default function header() {
  return (
    <>
    <div className="header">
        <div className="cim"><h1>BútorBolt</h1></div>
        <div className="nyelv"><button className='nyelvBtn'>Hu</button></div>
        <div className="nyelv"><button className='nyelvBtn'>En</button></div>
    </div>
    <hr />
    </>
  )
}
