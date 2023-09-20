import PropTypes from 'prop-types'
import "./Users.scss"


export default function Users({ children}) {



	return (
	<div className="Users">
		<div className='Users-body'>
    <h1>are you sure you want to remove this product??</h1>
	{children}
    
  </div>
	</div>
	)
}


Users.propTypes ={
    toggleModel: PropTypes.func.isRequired,
    children: PropTypes.element,
}
