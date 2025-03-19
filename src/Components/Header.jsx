import React from 'react'

function Header() {
  return (
    <div>
      <header className='header'>
        <nav>
          <ul className='nav-list'>
            <li className='nav-list-item'>
              <a href='#'>Home</a>
            </li>
            <li className='nav-list-item'>
              <a href='#'>About</a>
            </li>
            <li className='nav-list-item'>
              <a href='#'>Services</a>
            </li>
            <li className='nav-list-item'>
                <a href='#'>Contact</a>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
