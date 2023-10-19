import "./Pagination.scss"

export default function Pagination({total, per_page, paginate}) {

  return (
    <div className="Link">
      {
        Array(Math.ceil(total / per_page)).fill().map((_, index) =>{
          return(
            <a href="!#" key={index} onClick={() => paginate(index +1)}>{index +1}</a>
          )
        })
      }
    </div>
  )
}
