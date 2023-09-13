import './Component.css'

export default function Component({ children }) {
  return (
    <div className='wrap'>
      <h1>Children</h1>
      {children}
    </div>
  )
}
