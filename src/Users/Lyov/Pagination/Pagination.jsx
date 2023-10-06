

export default function Pagination({ perPage, total, paginate }) {


  return (
    <div className="Pagintation">
      {
        Array(Math.ceil(total / perPage)).fill().map((_, index) => {
          return (
            <a href="!#" key={index} className="link" onClick={() => paginate(index)}>{++index}
            </a>
          )
        })
      }
    </div>
  )
}
