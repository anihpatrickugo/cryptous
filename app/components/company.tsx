
import Image from 'next/image'
import icon1 from '../../public/images/icon1.png'
import icon2 from '../../public/images/icon2.png'
import icon3 from '../../public/images/icon3.png'

const Company
 = () => {
  return (
    
    <section id="company" className="bg-gray-100 flex flex-col md:flex-row justify-center items-center">
      <div className="container max-w-4xl py-8">
         <h1 className="text-xl md:text-3xl text-center font-bold md:font-black mb-8">
          The most trusted cryptocurrency platform
         </h1>

         <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start space-y-8">
             <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center md:items-start space-y-4 md:mt-8">
             
               <Image className='w-1/4 flex justify-center' 
                src={icon1} 
                alt="icon1" 
                width={500}
                height={500}/>
              
              <h3 className="font-extrabold text-md text-center md:text-left">Ease of trading</h3>
              <p className="text-lg md:text-sm text-center md:text-left">Intuitive interface</p>
              <p className="text-lg md:text-sm text-center md:text-left">Instant deposit options</p>
              <p className="text-lg md:text-sm text-center md:text-left">cashout directly to your bank account</p>

             </div>
             <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center md:items-start space-y-4">
             
               <Image className='w-1/4' 
                src={icon2} 
                alt="icon2" 
                width={500}
                height={500}/>
              
              <h3 className="font-extrabold text-md text-center md:text-left">Institutional-grade security</h3>
              <p className="text-lg md:text-sm text-center md:text-left">98% of assets stored safely offline</p>
              <p className="text-lg md:text-sm text-center md:text-left">Highly encrypted personal data</p>
              <p className="text-lg md:text-sm text-center md:text-left">Whitelisting and transanction confirmations</p>

             </div>
             <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center md:items-start space-y-4">
             
               <Image className='w-1/4' 
                src={icon3} 
                alt="icon3" 
                width={500}
                height={500}/>
              
              <h3 className="font-extrabold text-md text-center md:text-left">Proven Reliability</h3>
              <p className="text-lg md:text-sm text-center md:text-left">Exchanging bitcoin since 2011</p>
              <p className="text-lg md:text-sm text-center md:text-left">Industry-leading uptime</p>
              <p className="text-lg md:text-sm text-center md:text-left">24/7 dedicated support</p>

             </div>
         </div>
      </div>
    </section>
  )
}

export default Company

