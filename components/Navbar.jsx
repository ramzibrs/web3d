import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">bouras ramzi</div>
          <div className="space-x-4">
            <Link href="/" className="text-white">Home</Link>
            <Link href="#" className="text-white">About</Link>
            <Link href="#" className="text-white">Services</Link>
            <Link href="#" className="text-white">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar