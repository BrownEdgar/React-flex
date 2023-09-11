import PropTypes from 'prop-types'

export default function Child({ name,btnType, age }) {
  return (
    <div>
      <h1>{age}</h1>
      <h2>{name}</h2>
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
  btnType: PropTypes.oneOf(['lg', 'md', 'sm']),
  todo: PropTypes.arrayOf(PropTypes.exact({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  }))
}