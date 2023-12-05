import React from 'react'
import { Link } from 'react-router-dom'

function Menuitem(props) {
  return (
        <>
            <li><Link href="/">{props.item}</Link></li>
        </>  
  )
}

export default Menuitem