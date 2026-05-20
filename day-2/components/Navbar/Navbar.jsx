import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='bg-blue-400 justify-between flex items-center px-10 py-5'>
  <h2>Sumit Yadav</h2>
  <div className='flex gap-10'>
   <Link href="/">Home</Link>
   <Link href="/about">About</Link>
   <Link href="/courses">Courses</Link>
   <Link href="/contact">Contact</Link>

  </div>
    </div>
  )
}

export default navbar