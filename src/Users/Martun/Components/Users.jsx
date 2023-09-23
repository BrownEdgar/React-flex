import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import PropsTypes from 'prop-types'
import { useState } from 'react'


export default function Users({ posts, deleteById, getModal, modal }) {
	const [postid, setPostId] = useState(null)

	return (
		<div className="Users">

			{
				modal ?
					<div className='modal'>
						<div className="modalbody">
							<h1>
								hastates uzum jnjes?
							</h1>
							<button onClick={() => {
								deleteById(postid);
								getModal()
							}}>
								ha hastat, jnji
							</button>
							<button onClick={() =>
								getModal()
							}>
								che patahakanei kpe
							</button>
						</div>
					</div>
					: null

			}

			{
				posts.map((user) => {
					return (
						<div key={user.id} className="box">
							{
								<span className='deletItem'>
									<FontAwesomeIcon icon={faClose} onClick={() => {
										setPostId(user.id);
										getModal()
										console.log(postid);
									}} />
								</span>
							}
							<img className='photo' src={user.image} />
							<h3 className='title'>{user.title}</h3>
							<h4 className='about'>{user.apoutPhotograph}</h4>
						</div>
					)

				})
			}
		</div>
	)
}


