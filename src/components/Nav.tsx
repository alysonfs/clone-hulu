import { NextPage } from 'next'
import { useRouter } from 'next/router'
import requests from 'util/requests'

const Nav: NextPage = () => {
  const router = useRouter()

  return (
    <nav className='relative'>
      <div className='flex px-10 py-2 sm:px-20 text-2xl whitespace-nowrap 
      space-x-10 sm:space-x-20 overflow-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key}
            onClick={()=>router.push(`/?genre=${key}`)}
            className='last:pr-24 cursor-pointer transition 
              duration-100 transform hover:scale-150
              hover:text-white active:text-red-500'>
            {title}</h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 
      bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  )
}

export default Nav