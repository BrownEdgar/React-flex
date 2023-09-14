import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AiFillCloseCircle } from 'react-icons/ai'
import "./Modal.scss"

export default function Modal({children, title, variant, toggleModal, withClose}) {
  return (
    <div className="Modal">
        <div className={classNames("Modal-body", {
          "Modal-body_dark": variant === "dark",
          "Modal-body_light": variant === "light"
        })}>
            <h1 className="Modal-title">{title}</h1>
            {children}
            {
              withClose 
                ? <AiFillCloseCircle className="Modal-close close" onClick={toggleModal}/> 
                : <button className="btn Modal-btn" onClick ={toggleModal}>No</button>
            }
        </div>
    </div>
  )
}

Modal.defaultProps ={
  variant: "light",
  withClose: "true"
}

Modal.propTypes ={
    children: PropTypes.element,
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
    withClose: PropTypes.bool,
    toggleModal: PropTypes.func
}