import Image from 'next/image'
import article1 from '../../public/images/article1.png'
import article2 from '../../public/images/article2.png'
import article3 from '../../public/images/article3.png'

const Blog = () => {
  return (
    
    <section id="blog" className="bg-gray-100 w-screen py-8">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-center font-extrabold text-2xl">
          Learn to thrive
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-8  my-8">
          
           {/* first artic;e */}
           <div className="w-11/12 md:w-1/3 flex flex-col bg-white rounded-md shadow-md shadow-gray-300 hover:shadow-gray-500">
            <div className="w-full">
            <Image className='w-full' 
                    src={article1} 
                    alt="article 1" 
                    width={500}
                    height={500}/>
            </div>

            <div className="w-full px-2">

              <a href='#' className="text-sm font-bold py-4 no-underline hover:underline">
                New Leveraged Pairs Added to Margin Trading 
                on the Crypto.com Exchange
              </a>

              <p className="text-sm py-2">
                We urge everyone adopt good cybersecurity habits,
                and to have unique passwords on every site they use...
              </p>
               <div className="flex justify-between py-4">
                <p className="text-xs">By: Anih-Patrick</p>
                <p className="text-xs">13/06/2023</p>
                <p className="text-xs">5 min to read</p>
               </div>
            </div>
           </div>

           {/* second article */}
           <div className="w-11/12 md:w-1/3 flex flex-col bg-white rounded-md shadow-md shadow-gray-300 hover:shadow-gray-500">
            <div className="w-full">
            <Image className='w-full' 
                    src={article2} 
                    alt="article 2" 
                    width={500}
                    height={500}/>
            </div>

            <div className="w-full px-2">

              <a href='#' className="text-sm font-bold py-4 no-underline hover:underline">
                New Leveraged Pairs Added to Margin Trading 
                on the Crypto.com Exchange
              </a>

              <p className="text-sm py-2">
                We urge everyone adopt good cybersecurity habits,
                and to have unique passwords on every site they use...
              </p>
               <div className="flex justify-between py-4">
                <p className="text-xs">By: Anih-Patrick</p>
                <p className="text-xs">13/06/2023</p>
                <p className="text-xs">5 min to read</p>
               </div>
            </div>
           </div>

           {/* third article */}
           <div className="w-11/12 md:w-1/3 flex flex-col bg-white rounded-md shadow-md shadow-gray-300 hover:shadow-gray-500">
            <div className="w-full">
            <Image className='w-full' 
                    src={article3} 
                    alt="article 3" 
                    width={500}
                    height={500}/>
            </div>

            <div className="w-full px-2">

              <a href='#' className="text-sm font-bold py-4 no-underline hover:underline">
                New Leveraged Pairs Added to Margin Trading 
                on the Crypto.com Exchange
              </a>

              <p className="text-sm py-2">
                We urge everyone adopt good cybersecurity habits,
                and to have unique passwords on every site they use...
              </p>
               <div className="flex justify-between py-4">
                <p className="text-xs">By: Anih-Patrick</p>
                <p className="text-xs">13/06/2023</p>
                <p className="text-xs">5 min to read</p>
               </div>
            </div>
           </div>

        </div>
      </div>
    </section>
  )
}

export default Blog
