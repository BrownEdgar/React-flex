import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Users.css'
import { faCalendar, faFolder, faLocationPin, faPassport } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Users() {


    return (
        <div className="box">
            <h1 className='title'>2023 Intern - Software Engeineer (Java or JavaScript)</h1>
            <div className='fAwesome'>
            <h2 className='fAwesomeChild'>
                <FontAwesomeIcon icon={faLocationPin} /> Yerevan, Armenia
            </h2>    
            <h2 className='fAwesomeChild'>
                <FontAwesomeIcon icon={faFolder}/> Other
            </h2>
            <h2 className='fAwesomeChild'>
                <FontAwesomeIcon icon={faPassport}/> R134783
            </h2>
            <h2 className='fAwesomeChild'>
                <FontAwesomeIcon icon={faCalendar}/> 11/28/2022
            </h2>
            </div>
            <button className="customize">Save Job</button>
            <button className="customize blue">Save Job</button>
        </div>
    )
}