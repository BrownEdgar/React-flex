import './Users.scss'
import classNames from "classnames";

export default function Users({ steps }) {
	return (
		<div className="Steps">
			{
				steps.map((steps) => (
					<div className={classNames("Steps__item")} key={steps.id}>
						<img src={steps.image} alt="img" />
						<h1 className={classNames("Steps__title")}>{steps.title}</h1>
						<h2 className={classNames("Steps__desc")}>{steps.desc}</h2>
					</div>
				))
			}
		</div>

	)
}