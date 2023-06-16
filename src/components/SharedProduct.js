import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProduct = () => {
  return (
   <>
    <section>
        <h2>Crazy dope products</h2>
    </section>
    <Outlet></Outlet>
   </>
  )
}

export default SharedProduct