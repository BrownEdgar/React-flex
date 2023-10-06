export default function Pagination({ perPage, total, paginate }) {
  return (
    <div className="Pagination">
      {Array(Math.ceil(total / perPage))
        .fill()
        .map((_, index) => {
          return (
            <a
              href="!#"
              key={index}
              className="link"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </a>
          );
        })}
    </div>
  );
}
