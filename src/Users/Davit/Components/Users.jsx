import './Users.scss'

export default function Users({Data}) {
	return (
		<div className='User'>
			{
				Data.map( data => {
					return(
						<div key={data.id} className='User__content'>
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
