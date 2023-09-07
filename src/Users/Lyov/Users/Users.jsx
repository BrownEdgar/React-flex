

export default function Users({ data }) {
	return (
		<div>
			{
				data.map((user) => {
					return (
						<div key={user.id}>
							<h2>{user.firstName}</h2>
						</div>
					)
				})
			}
		</div>
	)
}
