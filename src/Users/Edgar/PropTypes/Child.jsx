import PropTypes from 'prop-types'

export default function Child({ btnType, age }) {
  return (
    <div>
      <h1>{age}</h1>
      <button className={`btn-${btnType}`}></button>
    </div>
  )
}

Child.defaultProps = {
  age: 23
}


Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  arr: PropTypes.arrayOf(PropTypes.string),
  btnType: PropTypes.oneOf(["lg", "md", 'sm']),
  todo: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  }))
}