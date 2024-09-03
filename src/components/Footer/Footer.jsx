import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { MdCall, MdMessage } from "react-icons/md"


function Footer() {
  return (
    <div className="bg-gray-800 text-white px-5 relative">
     <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
            {/* first col */}
            <div className="py-8 px-4">
                <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Be Ready To Grow</h1>
                <p>
                    Get Exclusive <span className="font-bold">Update</span>
                    Straight to your inbox.
                </p>
                <br />
                <div className="flex items-center h-10">
                    <input type="text" className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-1 bg-gray-800 border-gray-200 border-2" placeholder="Email" />
                    <button className="primary-button">Ok</button>
                </div>
            </div>
            {/* second col */}
            <div className="grid grid-cols-2 sm:grid-cols-3 cols-span-2 md:gap-52 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li><a  className="text-white/50" href="#">Home</a></li>
                            <li><a className="text-white/50"  href="#">About</a></li>
                            <li><a className="text-white/50"  href="#">Service</a></li>
                            <li><a  className="text-white/50" href="#">Login</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                        <ul className="flex flex-col gpa-3">
                            <li><a className="text-white/50" href="#">Home</a></li>
                            <li><a className="text-white/50" href="#">About</a></li>
                            <li><a className="text-white/50" href="#">Service</a></li>
                            <li><a className="text-white/50" href="#">Login</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="pt-8 px-4">
                        <h1 className="text-xl font-bold mb-2">Contact Us</h1>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <HiLocationMarker/>
                            <p className="text-white/50">Noida,Uttarpradesh</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdMessage/>
                            <p className="text-white/50">noida@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdCall/>
                            <p className="text-white/50">+8137056333</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            {/* second col */}
            <div className="hidden sm:block">
                <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
                    <span className="text-sm text-gray-400">
                        copyright &cpoy; 2024 by BANE
                    </span>
                    <div className="flex justify-center items-center pb-4 gap-4">
                        <a href="#">
                            <FaInstagram className="text-4xl" />
                        </a>
                        <a href="#">
                            <FaFacebook  className="text-4xl"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-4xl"/>
                        </a>
                    </div>
                    <span className="text-sm text-gray-400">
                        <ul className="flex gap-3">
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </span>
                </div>
            </div>
     </section>
    </div>
  )
}

export default Footer
