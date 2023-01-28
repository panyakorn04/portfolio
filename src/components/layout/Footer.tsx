import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=''>
        <div className='container mx-auto px-4 py-12'>
          <div className='flex flex-wrap items-center md:justify-between justify-center text-gray-500'>
            <div className='w-full md:w-4/12 px-4'>
              <div className='text-sm  font-semibold py-1'>
                © {new Date().getFullYear()}{' '}
                <a
                  href='https://www.creative-tim.com?ref=njs-footer'
                  className=' hover:text-gray-400 text-sm font-semibold py-1'
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className='w-full md:w-8/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
                <li>
                  <a
                    href='https://www.creative-tim.com?ref=njs-footer'
                    className=' hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=njs-footer'
                    className=' hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='http://blog.creative-tim.com?ref=njs-footer'
                    className=' hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer