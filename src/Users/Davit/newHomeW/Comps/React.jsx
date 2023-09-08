import './React.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile,faLocationDot, faPaste } from '@fortawesome/free-solid-svg-icons'
export default function React() {
	return (
		<div className='React'>
			<div className='React__content'>
			<p className='React__title'>2023 Intern - Software Engineer(Java or JavaScript)</p>
			<FontAwesomeIcon className='React__LocationIcon' icon={faLocationDot}/> 
			<span className='sp React__FirstSpan'>Yerevan, Armenia</span>
			<FontAwesomeIcon className='React__FileIcon' icon={faFile} /> 
			<span className='sp React__SecSpan'>Other</span>
			<FontAwesomeIcon className='React__DocsIcon' icon={faPaste}/> 
			<span className='sp React__ThSpan'>R134783</span>
			<div className='React__BtnDiv'>
			<button className='React__FirstBtn'>Save Job</button>
			<button className='React__SecBtn'>Apply now</button>
			</div>
			</div>

		</div>
	)
}