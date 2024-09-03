import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div data-aos="fade-down" className=" fixed top-0 right-0 w-full z-[99] backdrop-blur-sm bg-black/10 py-4 smpy-4">
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="flex text-white items-center txet-2xl text-center gap-4 font-bold">
                <img src={Logo} className="w-10" alt="" />
                <span>BANE-SPACE</span>
             </div>
            <div className="text-white hidden md:block">
                 <ul className="flex text-xl items-center gap-6 text-center py-4 sm:py-0">
                    <li>
                         <a href="#">About</a>
                   </li>
                   <li>
                         <a href="#">Technology</a>
                   </li>
                   <li>
                         <a href="#">Galaxy</a>
                   </li>
                   <li>
                         <a href="#">Satelite</a>
                   </li>
                </ul>
            </div>

            <div>
              <button className="text-white border-2 border-white px-3 py-2 rounded-md">Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
