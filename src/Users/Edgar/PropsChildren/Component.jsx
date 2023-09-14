import './Component.css'

export default function Component({ children }) {
  console.log(children)
  return (
    <div className='wrap'>
      <h1>Children</h1>
      {children}
    </div>
  )
}
