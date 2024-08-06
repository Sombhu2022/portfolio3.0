import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-between relative z-30 p-2 pl-5 pr-5'>
      <div className='text-3xl'>Sombhu das</div>
      <nav className='flex gap-4 text-xl items-center justify-center'>
        <Link href={'#about'}> About </Link>
        <Link href={'#contact'}> Contact </Link>
      </nav>
    </header>
  )
}

export default Navbar