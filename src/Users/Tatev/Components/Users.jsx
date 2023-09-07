import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Users.scss"
import classNames from "classnames"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { FcPrivacy } from "react-icons/fc";

export default function Users({ datas }) {


	const truncate = (desc, stybols) => {
		return desc.length > stybols ? desc.slice(0, desc.lastIndexOf(' ', stybols)) + "..." : desc;
	}

	return (
		<div className={classNames("Datas")}>
			{
				datas.map(data => {
					return (
						<div className={classNames("Datas_item")} key={data.id}>
							<span className="xmark">
								<FontAwesomeIcon icon={faCircleXmark} size="2x" color="#fff"/>
							</span>
								<span>
								<HiOutlineShieldExclamation />
								<FcPrivacy />
								</span>
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
