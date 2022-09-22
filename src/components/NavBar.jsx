import React from 'react'

const NavBar = () => {
  const items = ['Inicio', 'Sobre nosotros', 'Carrito']
  return (
    <>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </>
  )
}

export {NavBar}