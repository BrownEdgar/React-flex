import {AiFillCloseCircle} from 'react-icons/ai'
import './Modal.scss'
import Users from '../../Components/Users'
export default function Modal({removeFalse, children}) {
    return (
        <div className='Modal'>
            <div className="Modal-body">
                {children}
                <AiFillCloseCircle className='Modal-close'onClick={removeFalse}/>
            </div>
        </div>
    )
}
