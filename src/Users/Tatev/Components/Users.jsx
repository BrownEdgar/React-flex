import "./Users.scss"
import classNames from "classnames"

export default function Users({datas}) {
  return (
    <div className ={classNames("Datas")}>
        {
            datas.map(data => {
                return (
                    <div className ={classNames("Datas_item")} key = {data.id}>
                        <img src={data.image} alt="" />
                        <h3 className ={classNames("Datas_title")}>{data.title}</h3>
                        <p className ={classNames("Datas_desc")}>{data.desc}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
