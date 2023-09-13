import { AiOutlineClose } from 'react-icons/ai'
import PropTypes from 'prop-types'
import './Users.scss'
export default function Users({Data, toggleBtn}) {
	return (
		<div className='User'>
			{
				Data.map( data => {
					return(
						<div key={data.id} className='User__content'>
							<AiOutlineClose className='CloseBtn' onClick={toggleBtn}/>
							<img className='User__img' src={data.imgData} alt="" />
							<h1 className='User__title'>{data.header}</h1>
							<p className='User__text'> {data.title}</p>
						</div>
				)
				})
				
			}
		</div>
	)
}

Users.propTypes = {
	Data: PropTypes.string.isRequired,
	toggleBtn: PropTypes.func.isRequired,
}