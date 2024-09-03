import Mountain from '../../assets/Mountain.png'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className="h-full flex  justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 ">
            <div className='gap-4 space-y-3 lg:pr-36' >
                <h1 className='text-5xl font-bold uppercase' data-aos="fade-up">Orbit The earth</h1>
                <p data-aos="fade-up" data-aos-delay="300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nihil ab fugiat sapiente a voluptate.</p>
                <button data-aos="fade-up" data-aos-delay="400" className='bg-blue-400 text-white hover:bg-blue-500 px-2 py-1 duration-200 rounded-md'>Lear More</button>
            </div>
            
            <div></div>
        </div>
      </div>
      <img src={Mountain} className='absolute right-0 bottom-0 w-full brightness-50' alt="" />

      {/* bottom gradient section */}
      <div className=' absolute right-0 bottom-0 w-full h-[20px] sm:h-[50px] md:h-[60px] z-30 bg-gradient-to-b from-transparent from-10% to-black to-90%'></div>
    </div>
  )
}

export default Hero
