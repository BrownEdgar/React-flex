import './Users.scss'


export default function Users({ posts }) {

	return (
		<div className="Users">
			{
				posts.map((user) => {
					return (
						<div key={user.id} className="box">
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