import PropTypes from 'prop-types'
import './Modal.scss'
export default function Modal({ toggleBtn, deleteProduct, children }) {

  return (
    <div className='Modal'>
      <div className="Modal-body">
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  toggleBtn: PropTypes.func.isRequired,
  Delete: PropTypes.func.isRequired,
}