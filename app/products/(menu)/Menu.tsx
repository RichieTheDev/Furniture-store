import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className="px-4 sm:px-12 mb-4">
        <h1 className="h1header mt-4 ">All Products</h1>
        <div className="mt-2 font-semibold flex space-x-4 items-center  ">
        <Link href="/products">All</Link>
          <Link href="/products/table">Tables</Link>
          <Link href="/products/lamps">Lamps</Link>
          <p>Chairs</p>
          <p>Shelves</p>
          <p className="flex hover:bg-gray-200 hover:rounded-xl">Kitchen</p>
        </div>
        </div>
  )
}

export default Menu