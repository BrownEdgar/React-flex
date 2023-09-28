import React from 'react'
import Nav from './Navigation/Nav'
import { Outlet } from 'react-router-dom'

export default function Layouts() {

  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}