import { useState } from 'react'
import './Users.scss'
import classNames from 'classNames'

export default function Users({ data, users }) {
  const [activeId, setActiveId] = useState(null)

  const handleDeleteId = (id) => {
    const arr = users.filter(user => user.id !== id)
  }
  return (
    <div className='Users'>
      {
        data.map(user => {
          return (
            <div className={classNames('Users-item', {
              'Users-item_active': activeId === user.id
            })}
              key={user.id}
              onClick={() => setActiveId(user.id)}
            >
              <h2 className='Users-title'>{user.full_name}</h2>
              <span>Email:{user.email}</span>
              <p className='Users-description'>
                {user.about}
              </p>
              <button onClick={handleDeleteId}>Delete User</button>
            </div>
          )
        })
      }
    </div>
  )
}
