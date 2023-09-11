import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faAddressCard, faCalendarDays,faFolder,faLocationDot} from '@fortawesome/free-solid-svg-icons' 
import './users.css'



export default function users({ info }) {
  return (
    <div className='box'>
      {
        info.map((elem) => {
          return (
            <div className='infoId' key={elem.id}>
              <h1 className='elemTitle'>{elem.title}</h1>
              <div className='information'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className='elemLocation'>{elem.location}
                </span>
                <FontAwesomeIcon icon={faFolder} />
                <span className='elemFile'>{elem.file}
                </span>
                <FontAwesomeIcon icon={faAddressCard} />
                <span className='elemRefNumber'>{elem.RefNumber}
                </span>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className='elemDate'>{elem.date}
                </span>
              </div>
              <div className='button'>
                <button className='SaveJob'>Save Job</button>
                <button className='ApplyNow'>Apply Now</button>
              </div>
            </div>
          )
        })

      }
    </div>
  )
}
