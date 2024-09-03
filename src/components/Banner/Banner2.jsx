import satelite from '../../assets/satelite2.jpg'

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
         
            <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
                <p  data-aos="fade-up" data-aos-delay="300" className='text-sky-800 uppercase'>Our Mission</p>
                <h1 data-aos="fade-up" data-aos-delay="400"  className='uppercase text-5xl'>Rapidcast</h1>
                <p data-aos="fade-up" data-aos-delay="500" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque accusamus incidunt obcaecati adipisci illum deserunt consequuntur velit, esse ratione voluptatibusLorem ipsum dolor sit, amet consectetur adipisicing elit. Atque accusamus incidunt obcaecati adipisci illum deserunt consequuntur velit, esse ratione voluptatibus
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque accusamus incidunt obcaecati adipisci illum deserunt consequuntur velit, esse ratione voluptatibus!
                </p>
                <button data-aos="fade-up" data-aos-delay="600"  className='primary-button'>Learn More</button>
            </div>
            <div className="">
                <img src={satelite}  data-aos="zoom-in"  className='w-full mx-auto sm:w-[80%] max-h-[450px] object-cover' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
