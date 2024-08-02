import React from 'react'
import { useState } from 'react'
import './DropdownNav.scss'
import MenuIcon from './MenuIcon'

export default function () {
  const [clicked, setClicked] = useState(false)
  
  return (
    <div>
      <MenuIcon />
    </div>
  )
}
