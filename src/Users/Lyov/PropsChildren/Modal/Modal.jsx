import { AiFillCloseCircle } from 'react-icons/ai'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Modal.scss'

export default function Modal({ toggleModal, children, title, variant }) {
  return (
    <div className='Modal'>
      <div className={classNames('Modal-body',{
        [`Modal-body_${variant}`]: true 
      })}>
        <h2>{title}</h2>
        {children}
        <AiFillCloseCircle className='Modal-close' onClick={toggleModal} />
      </div>
    </div>
  )
}

Modal.defaultProps={
  variant:'light'
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark'])
}