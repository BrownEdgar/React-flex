import classNames from "classnames";
import "./Modal.scss"
import PropTypes from 'prop-types'
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({toggleModel,variant,children,withClose}) {
  return ( 
  <div className="Modal">
    <div className={classNames("Modal-body",{
     [`Modal-body_${variant}`] : true
    })}>
    <h1>Lorem ipsum dolor sit amet.</h1>
    {
      withClose ?  <AiFillCloseCircle className="Modal-close" onClick={toggleModel}/> : null

    }
    {children}
    </div>
  </div>
  )
}




Modal.defaultProps={
    variant:"light",
    withClose: true

}
Modal.propTypes ={
    toggleModel: PropTypes.func.isRequired,
    children: PropTypes.element,
    title:PropTypes.string,
    withClose:PropTypes.bool,
    variant:PropTypes.oneOf(["light","dark"])
}
