

const Contact = () => {
  return (
    <section id="contact" className="bg-indigo-950 w-screen text-white py-16">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-center font-extrabold text-2xl md:text-4xl pt-12">
          Never miss a drop
        </h2>
        <h6 className="text-center text-md md:text-2xl mt-4">
        Subscribe for the latest news, drops & collectibles
        </h6>

        <div className="w-11/12 md:w-3/5 mx-auto border border-white flex items-center mt-8 rounded-full relative">
          <input type="text" name="" id="" 
          placeholder='Enter your email address' 
          className='bg-transparent p-4  rounded-full focus:outline-none'/>
          <button className="bg-orange-700 p-4 absolute right-0.5 rounded-full hover:opacity-80">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact
