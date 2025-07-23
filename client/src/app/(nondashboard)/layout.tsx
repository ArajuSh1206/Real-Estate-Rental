import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
        className="fixed top-0 left-0 w-full z-50 shadow-xl"
        style={{ height: `${NAVBAR_HEIGHT}px`}}
        >
      <Navbar />
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
            <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false} 
        > 
            <div className="flex items-center gap-4 md:gap-6">
                <Image 
                    src = "/logo.svg"
                    alt = "Rentiful Logo"
                    width = {24}
                    height = {24}
                    className = "w-6 h-6"
                />
            </div>
            </Link>
        </div> 
      </div>

      <main className ={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
      </main>
    </div>
  )
}

export default Layout
