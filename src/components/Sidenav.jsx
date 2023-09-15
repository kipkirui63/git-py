import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineCheckSquare, AiOutlineSafetyCertificate} from "react-icons/ai";
import {GrProjects} from "react-icons/gr"

const Sidenav = () => {
    const [nav, setNav] = useState (false)
    const handleNav = () => {
        setNav(!nav);
    };
    
//     return (
//         <div>
//             <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
//             {
//                 nav ? (

//                     <div className="fixed w-full h-screen bg-grey/90 flex flex-col justify-center items-center z-20">
//                         <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease duration-200">
//                             <AiOutlineHome size={20} />
//                             <span className="pl-4"> Home</span>
//                         </a>
//                         <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease duration-200">
//                             <AiOutlineCheckSquare size={20} />
//                             <span className="pl-4"> About Me</span>
//                         </a>
//                         <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease duration-200">
//                             <AiOutlineSafetyCertificate size={20} />
//                             <span className="pl-4">Education</span>
//                         </a>
//                         <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease duration-200">
//                             <AiOutlineProject size={20} />
//                             <span className="pl-4">Career</span>
//                         </a>
//                         <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease duration-200">
//                             <GrProjects size={20} />
//                             <span className="pl-4">My Projects</span>
//                         </a>
//                         <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease duration-200">
//                             <AiOutlineMail size={20} />
//                             <span className="pl-4">Contacts</span>
//                         </a>
//                     </div>
//                 ):(
//                     ''
//                 )}
//                 <div className="md:block hidden fixed top-[25%] z-10">
//                     <div className="flex flex-col">
//                     <a onClick={handleNav} href="#main" className="rounded-full shadow-lg bg-orange-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                         <AiOutlineHome size={20} />
//                     </a>
//                     <a onClick={handleNav}href="#main" className="rounded-full shadow-lg bg-orange-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                         <AiOutlineCheckSquare size={20} />
//                     </a>
//                     <a onClick={handleNav}href="#main" className="rounded-full shadow-lg bg-orange-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                         <AiOutlineSafetyCertificate size={20} />
//                     </a>
//                     <a onClick={handleNav}href="#main" className="rounded-full shadow-lg bg-orange-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                         <AiOutlineProject size={20} />
//                     </a>
//                     <a onClick={handleNav} href="#projects" className="rounded-full shadow-lg bg-orange-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                         <GrProjects size={20} />
//                     </a>
//                     <a onClick={handleNav} href="#contacts" className="rounded-full shadow-lg bg-orange-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                         <AiOutlineMail size={20} />
//                     </a>
                        
//                     </div>
//                    </div>
//         </div>
//     );
// };

// export default Sidenav;