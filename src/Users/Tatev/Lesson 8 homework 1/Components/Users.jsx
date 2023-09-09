import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import { FcDoughnutChart } from "react-icons/fc";
import "./Users.scss"


export default function Users({ datas, deleteById }) {

	const truncate = (desc, stubols) =>{
		// return desc.length > stubols ? desc.slice(0, stubols) + "..." : desc;
		return desc.length > stubols ? desc.slice(0, desc.indexOf(" ", stubols)) + "..." : desc;
	}

	return (
		<div className={classNames("Datas")}>
			{
				datas.map(data => {
					return (
						<div className={classNames("Datas_item")} key={data.id}>
							<span className="xmark" onClick={() => deleteById(data.id)}>
								<FontAwesomeIcon icon={faCircleXmark} color="#fff" size="2x"/>
							</span>
							{/* <span>
								<FcDoughnutChart />
							</span> */}
							<img src={data.image} alt="" />
							<h3 className={classNames("Datas_title")}>{data.title}</h3>
							<p className={classNames("Datas_desc")}>{truncate(data.desc, 100)}</p>
						</div>
					)
				})
			}
		</div>
	)
}
