import { useState } from 'react';
import classNames from 'classnames';

import './Users.scss'

export default function Users({ data }) {
  const [activeId, setActiveId] = useState(null)
  return (
    <div className='Users'>
      {
        data.map(user => {
          return (
            <div className={classNames('Users-item', {
              'Users-item_active': activeId === user.id
            })}
              key={user.id}
              onClick={() => setActiveId(user.id)}>
              <h2 className='Users-title'>{user.full_name}</h2>
              <span className='Users-email'>email: {user.email}</span>
              <p className='Users-description'>
                {user.about}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}
