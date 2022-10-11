import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return <div className="footer"> © {year} Tomas Alves de Souza</div>
}

export default Footer
