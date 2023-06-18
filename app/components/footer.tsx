import {
    FaFacebookSquare, 
    FaTwitterSquare, 
    FaLinkedin, 
    FaInstagramSquare } from 'react-icons/fa'
 

const Footer = () => {
  return (
    <footer id="footer" className="bg-violet-900 w-screen text-white py-8">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row w-full mb-8 space-y-12 md:space-y-0">
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/4">
          <h4 className="text-lg font-bold">
            Business
          </h4>
          <a href="#" className="text-sm text-gray-200 hover:underline">Prime</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Custody</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Assets Hub</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Commerce</a>
        </div>
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/4">
          <h4 className="text-lg font-bold">
            Exchange
          </h4>
          <a href="#" className="text-sm text-gray-200 hover:underline">Exchange Home</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Margin Trading</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Derivatives Trading</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Trading Arena</a>
        </div>
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/4">
          <h4 className="text-lg font-bold">
            Blockchain
          </h4>
          <a href="#" className="text-sm text-gray-200 hover:underline">Chain Explorer</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">The Syndicate</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Security</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Cryptous Credit</a>
        </div>
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/4">
          <h4 className="text-lg font-bold">
            Resources
          </h4>
          <a href="#" className="text-sm text-gray-200 hover:underline">Prices</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Site Widgets</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Tax</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Blog</a>
          <a href="#" className="text-sm text-gray-200 hover:underline">Research</a>
        </div>
      </div>

      <hr className='bg-gray-200'/>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full my-8">
        <div>
         <p className='text-sm text-gray-200'>copyright @2023, cryptous</p>   
        </div>

        <div className='mb-4'>
         <p className='text-sm text-gray-200'>Designed by
          <a href="https://github.com/anihpatrickugo/">Anih-Patrick Ugochukwu </a>
          </p>   
        </div>

        <div className='w-3/5 md:w-1/3 flex justify-between items-center mb-4'>
          <a href='#' className='w-1/4'>
            <FaFacebookSquare size={30} className='text-gray-200 bg-transparent  rounded-md hover:text-orange-600 hover:bg-white'/>
          </a>
          <a href="https://twitter.com/anihpatrickugo/" className='w-1/4'>
            <FaTwitterSquare size={30} className='text-gray-200 bg-transparent  rounded-md hover:text-orange-600 hover:bg-white'/>
          </a>
          <a href='https://linkedin.com/in/anihpatrickugo/' className='w-1/4'>
            <FaLinkedin size={30} className='text-gray-200 bg-transparent  rounded-md hover:text-orange-600 hover:bg-white'/>
          </a>
          <a href="https://instagram.com/anihpatrickugoo/" className='w-1/4'>
            <FaInstagramSquare size={30} className='text-gray-200 bg-transparent  rounded-md hover:text-orange-600 hover:bg-white'/>
          </a>
        </div>

      </div>
    </div>
  </footer>
  
  )
}

export default Footer
