import PropTypes from 'prop-types'
import './Modal.scss'
export default function Modal({toggleBtn, Delete}) {

	return (
		<div className='Modal'>
			<div className="Modal-body">
			<p className='Modal-title'>Are you sure?</p>
			<button className='Modal-closeBtn'  onClick={Delete}>close</button>
			<button className='Modal-cancelBtn' onClick={toggleBtn}>cancel</button>
			</div>
		</div>
	)
}

Modal.propTypes = {
	toggleBtn: PropTypes.func.isRequired,
	Delete: PropTypes.func.isRequired,
}