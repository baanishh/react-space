import satelite from '../../assets/satelite1.jpg'

const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="">
                <img src={satelite} data-aos="zoom-in" alt="" />
            </div>
            <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                <p data-aos="fade-up" data-aos-delay="300" className='text-sky-800 uppercase'>Our Mission</p>
                <h1 data-aos="fade-up" data-aos-delay="400"  className='uppercase text-5xl'>Rapidcast</h1>
                <p data-aos="fade-up" data-aos-delay="500" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque accusamus incidunt obcaecati adipisci illum deserunt consequuntur velit, esse ratione voluptatibus!</p>
                <button data-aos="fade-up" data-aos-delay="600" className='primary-button'>Learn More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
