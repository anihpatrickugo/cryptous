import Image from 'next/image'
import mobileapp from '../../public/images/app.png'
import android from '../../public/images/android-store.png'
import apple from '../../public/images/apple-store.png'

const About
 = () => {
  return (
    <section id="about" className="bg-indigo-950 w-screen text-white py-8">
      <div className="container max-w-4xl mx-auto px-4 md:px-0 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center space-y-8">
            <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/2">
              <h3 className="font-extrabold text-2xl max-w-xs text-center md:text-left">
                Try the future today, download crypto
              </h3>
              <p className="text-sm text-center md:text-left">
              Stay connected to the market with our mobile app. Featuring advanced order 
              types and analytical tools for experienced traders, as well as a simple 
              buy & sell interface for those just getting started.
              </p>

              <div className="hidden md:flex mt-4 -ml-8">
                <div className="w-1/2 flex justify-center">
                   <Image className='w-2/3' 
                    src={android} 
                    alt="android store" 
                    width={500}
                    height={500}/>
                </div>
                <div className="w-1/2 flex justify-center">
                   <Image className='w-2/3' 
                    src={apple} 
                    alt="apple store" 
                    width={500}
                    height={500}/>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
            <Image className='w-2/3' 
                src={mobileapp} 
                alt="mobile app" 
                width={500}
                height={500}/>
            </div>
        </div>
        <div className="flex md:hidden mt-4 w-2/3">
                <div className="w-full flex justify-center">
                   <Image className='w-2/3' 
                    src={android} 
                    alt="android store" 
                    width={500}
                    height={500}/>
                </div>
                <div className="w-full flex justify-center">
                   <Image className='w-2/3' 
                    src={apple} 
                    alt="apple store" 
                    width={500}
                    height={500}/>
                </div>
              </div>
      </div>
    </section>
  )
}

export default About

