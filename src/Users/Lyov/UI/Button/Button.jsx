/* eslint-disable react/prop-types */
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Button.css'

export default function Button(props) {
  return (
    <div className='ButtonBox'>
      <button
        className={classNames('btn', {
          [`btn-${props.size}`]: true,
          [`btn-${props.variant}`]: true,
        })}
        onClick={props.onClick && props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
}
 Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'danger'])
 }