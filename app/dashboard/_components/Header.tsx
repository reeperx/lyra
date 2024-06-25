import { Search } from 'lucide-react'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='p-6 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
            <Search />
            <input type="text" placeholder='search...' className='outline-none text-primary'/>
        </div>
        <div>
            <h2 className='bg-primary p-1 rounded-full text-white text-sm px-2'>💰 Join membership from just R100.00/Month</h2>
        </div>
    </div>
  )
}

export default Header