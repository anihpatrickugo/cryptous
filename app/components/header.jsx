"use client"
import Image from 'next/image'
import { useContext } from 'react'
import { MobileMenu } from '../contexts/mobileMenuContext'
import illustration from '../../public/images/illustration.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

    const { menu, dispatch } = useContext(MobileMenu)

  return (
    <header id="home" className="bg-indigo-950 flex justify-center items-center text-white">
      <div className="container max-w-4xl py-2">
         <div className="fixed z-20 -top-4 -left-4 -right-4 md:static flex justify-between  mx-4 my-4 md:mx-0 md:my-2 py-8 md:py-0 bg-indigo-950">
             {/* logo */}
            <div className='ml-2 md:ml-0 w-32'>
             <Image className='w-full' 
             src="/logo.png" 
             height={100}
             width={100}
             alt="header-logo" />
            </div>

            {/* nav links desktop */}
            <div className="hidden md:flex justify-between items-center w-4/5">
            <nav className="flex justify-around items-center w-9/12">
            <a href="#home" className="no-underline hover:underline text-sm">Home </a>
            <a href="#company" className="no-underline hover:underline text-sm">Company</a>
            <a href="#about" className="no-underline hover:underline text-sm">About</a>
            <a href="#pricing" className="no-underline hover:underline text-sm">Pricing</a>
            <a href="#team" className="no-underline hover:underline text-sm">Team</a>
            <a href="#contact" className="no-underline hover:underline text-sm">Contact</a>
            <a href="#blog" className="no-underline hover:underline text-sm">Blog</a>
            </nav>

            <button 
            className="px-4 py-2 rounded-full border-2 border-orange-700 hover:bg-orange-700 active:opacity-80">
              Trade Now
            </button>
            </div>

            {/* navlink mobile */}
            <div className='mr-2 md:hidden' onClick={()=> dispatch('open')}>
             <GiHamburgerMenu size={35}/>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-center items-center mt-28 md:mt-0">
           <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left py-4">
              Make better buisness with crypto currency
            </h1>
            <p className="text-md md:text-sm text-center md:text-left w-4/5 md:w-96">
              We offer users a fully operatinal long-term rental platform.
              It plans to leverage blockchain technology.
            </p>

            <div className=''>
            <button 
            className="px-8 py-2 my-8 rounded-full bg-orange-700 hover:opacity-70 active:opacity-80">
              Get Whitelisted
              </button>
            </div>

           </div>

           <div className="w-full md:w-1/2">
           <Image className='w-full' 
             src={illustration} 
             alt="illustration" 
             width={500}
             height={500}/>
           </div>
         </div>

         {/* <div className="flex justify-center items-center w-full">
          <table border={1} cellPadding="5" cellSpacing="5">
            <tr>
              <th>Name</th>
              <th>Volume</th>
            </tr>
            <tr>
              <th>Bitcoin</th>
              <th>500000000</th>
            </tr>
            <tr>
              <th>Ethereum</th>
              <th>748380000</th>
            </tr>

          </table>
         </div> */}


         {/* mobile dropdown */}
         <div className= {` ${menu ? 'flex' : 'hidden'} flex-row justify-center items-center fixed z-50 w-screen h-screen top-0 left-0 right-0  bg-indigo-950 md:hidden`}
            onClick={()=> dispatch('close')} >

            <div className='absolute top-4 right-4 text-4xl'>&#10060;</div>
            <nav aria-label='mobile' className="flex flex-col justify-evenly items-center space-y-8">
                <a href='#home' className='p-4 text-3xl font-extrabold'>Home</a>
                <a href='#company' className='p-4 text-3xl font-extrabold'>Company</a>
                <a href='#about' className='p-4 text-3xl font-extrabold'>About</a>
                <a href='#contact' className='p-4 text-3xl font-extrabold'>Contact</a>
                <a href='#blog' className='p-4 text-3xl font-extrabold'>Blog</a>
            </nav>
         </div>
      </div>
    </header>
  )
}

export default Header
