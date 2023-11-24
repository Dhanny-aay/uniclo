import Footer from "../components/footer";
import Navbar from "../components/navbar";
import arrowdown from './assets/Arrow_Down_Right_LG.svg';
import adbg from './assets/adBG.svg';
import admob from './assets/adMob.svg';
import { motion } from "framer-motion";
import {useContext} from 'react'
import { ResourcesContext } from '../contexts/contextprovider';
import { Link } from 'react-router-dom';

const Resources = () => {


    const [resourcesArray] = useContext(ResourcesContext);

    const data = [
        { topic: "Navigating the Cloud", desc: "A Guide for African Businesses" },
        { topic: "A Guide for African Businesses", desc: "Emerging Trends in Africa" },
    ];
    const cases = [
        { topic: "Transforming [Client Name] with Cloud Migration", content: "Unlocking the Power of Cloud Computing Unlocking the Power of Cloud Computing Unlocking the Power of Cloud Computing Unlocking the Power of Cloud Computing Unlocking the Power of Cloud Computing Unlocking the Power of Cloud Computing......." },
    ];

    return ( 
        <>
        <Navbar/>
        <motion.div
         
        >
        <div className=" mt-[8em] px-4 md:px-8 lg:px-16 w-full font-Outfit text-[#121212]">
            <p className=" font-medium text-3xl md:text-[40px] md:leading-[50px] text-center">Resources</p>
            <p className=" text-center font-normal mt-3 text-lg md:text-xl ">Stay informed and inspired</p>
            <p className=" text-center font-normal mt-1 text-lg md:text-xl ">Explore our blog for insightful articles on cloud trends, best practices, and success stories</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[32px] lg:gap-[4%] w-full mt-8">
                {resourcesArray.map((item, index) => (
                    <div key={index} className="w-full text-center">             
                        <div className=" w-full h-[290px] bg-[#F5F5F4] rounded-[20px]" style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <p className="text-left mt-3 text-lg md:text-xl font-medium">{item.title}</p>
                        <p className="text-left mt-1 text-[#1e1e1e] text-sm md:text-base">{item.tagline.substring(0,30)+'...'}</p>
                        <Link to={`/resources/${item.id}`}><button className=' flex space-x-8 mt-6 items-center'>
                            <p className=' gradient-text text-base'>View more</p>
                        </button></Link>
                    </div>
                ))}
            </div>

            <p className=" mt-16 font-medium text-3xl md:text-[40px] md:leading-[50px] text-center">Use Cases</p>
            <div className=" grid grid-cols-1 w-full mt-8 gap-[32px]">
                {cases.map((item, index) => (
                    <div key={index} className="w-full text-center">             
                        <div className=" w-full h-[290px] bg-[#F5F5F4] rounded-[15px]"></div>
                        <p className="text-left mt-3 text-lg md:text-xl font-medium">{item.topic}</p>
                        <p className="text-left mt-1 text-[#1e1e1e] text-sm md:text-base">{item.content}</p>
                    </div>
                ))}
            </div>

            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type:'tween' }}
            className="  py-[3em] w-full font-Outfit text-[#fff]">
                <div className=" w-full h-[400px] md:h-[300px] flex justify-center items-center text-center flex-col rounded-[30px] bg-gradient-to-r from-[#288DD1CC] via-[#3fd0e0CC] to-[#3FE0C8CC] relative md:space-y-4">
                    <img src={adbg} className="hidden md:block absolute left-0 w-full h-full object-cover rounded-[30px]" alt="" />
                    <img src={admob} className="z-10 absolute top-0 h-full w-full object-cover block md:hidden" alt="" />
                    <p className=' font-semibold text-xl md:text-3xl'>Join our webinars and access whitepapers </p>
                    <p className=' font-normal px-4 md:px-0 text-base md:text-xl'>We offer in-depth knowledge on cloud technologies and implementation.</p>
                    <div className=" flex flex-col md:flex-row items-center justify-center z-20  mt-4 md:space-x-6 space-y-4 md:space-y-0">
                        <input className=" w-full md:w-auto h-[52px] bg-[#133D4C80] p-2.5 text-base font-Outfit  rounded-[30px]" type="text" />
                        <button className=" w-full md:w-auto px-9 py-4 bg-[#fff] rounded-[30px] text-base text-[#000]">Subscribe</button>
                    </div>
                </div>
            </motion.div>

        </div>
        <Footer/>
        </motion.div>
        </>
     );
}
 
export default Resources;