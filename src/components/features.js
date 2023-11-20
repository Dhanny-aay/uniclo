import beneone from './assets/beneone.svg';
import benetwo from './assets/benetwo.svg';
import benethree from './assets/benethree.svg';
import benefour from './assets/benefour.svg';
import benefive from './assets/benefive.svg';
import benesix from './assets/benesix.svg';
import { motion } from "framer-motion";



const Features = () => {
    return ( 
        <>
        <div className="py-[3em] px-4 md:px-8 lg:px-16 w-full font-Outfit text-[#121212]">
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type:'tween' }}
            className=' flex flex-col md:flex-row w-full justify-between items-start'
            >
                <p className=" w-full md:w-[48%] font-medium text-2xl md:leading-10 lg:text-[40px]">Cloud services for service providers and enterprises</p>
                <p className=" w-full md:w-[48%] text-base mt-3 md:mt-0">Get on-demand, enterprise-grade cloud services for compute, networking, and storage, anywhere - on-premises, hybrid, multi-cloud, and at the edge. Pay only for what you use and lower your costs.</p>
            </motion.div>
            
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-[4%] mt-8 md:mt-16">

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className='w-full md:h-[270px] lg:h-auto rounded-[20px] bg-[#F5F5F5] p-5 lg:p-7'>
                    <span className=' flex flex-col md:flex-row items-start md:items-center md:space-x-3'>
                        <img 
                        src={ beneone }
                        alt="" />
                        <p className=' font-medium text-xl'>Zero-risk, cloud services.</p>
                    </span>
                    <p className=' text-[#121212CC] text-base mt-2'>Improve your Cloud Services with Access to fully-managed IT infrastructure on demand. Only pay for what you use. Scale up, down or turn it off at any time. No long-term contract or CapEx hardware investments.</p>
                </motion.div>

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className='w-full md:h-[270px] lg:h-auto rounded-[20px] bg-[#F5F5F5] p-5 lg:p-7'>
                    <span className=' flex flex-col md:flex-row items-start md:items-center md:space-x-3'>
                        <img 
                        src={ benetwo }
                        alt="" />
                        <p className=' font-medium text-xl'>Hybrid-ready by design.</p>
                    </span>
                    <p className=' text-[#121212CC] text-base mt-2'>Simplify complex distributed infrastructure whether, on-prem, across multiple clouds or at the edge. Centralize your management capabilities and deliver the best price-performance ratio for any workload.</p>
                </motion.div>

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className='w-full md:h-[270px] lg:h-auto rounded-[20px] bg-[#F5F5F5] p-5 lg:p-7'>
                    <span className=' flex flex-col md:flex-row items-start md:items-center md:space-x-3'>
                        <img 
                        src={ benethree }
                        alt="" />
                        <p className=' font-medium text-xl'>Global reach. Local appeal.</p>
                    </span>
                    <p className=' text-[#121212CC] text-base mt-2'>Deliver the performance and reliability your customers expect no matter the location. Offer low-latency edge services with our existing fully-managed clouds or global base of 300+ MSP partners.</p>
                </motion.div>

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className='w-full md:h-[270px] lg:h-auto rounded-[20px] bg-[#F5F5F5] p-5 lg:p-7'>
                    <span className=' flex flex-col md:flex-row items-start md:items-center md:space-x-3'>
                        <img 
                        src={ benefour }
                        alt="" />
                        <p className=' font-medium text-xl'>Trust your cloud.</p>
                    </span>
                    <p className=' text-[#121212CC] text-base mt-2'>Take control of your data with UniCloud’s secure-by-design infrastructure, data protection solutions, and our global network of partners. Isolate your data with click-to-provision options for dedicated storage at the controller level.</p>
                </motion.div>

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className='w-full md:h-[270px] lg:h-auto rounded-[20px] bg-[#F5F5F5] p-5 lg:p-7'>
                    <span className=' flex flex-col md:flex-row items-start md:items-center md:space-x-3'>
                        <img 
                        src={ benefive }
                        alt="" />
                        <p className=' font-medium text-xl'>Centralized and easy monitoring</p>
                    </span>
                    <p className=' text-[#121212CC] text-base mt-2'>Access our simple dashboard based cloud management. Web-based interface to monitor your applications and infrastructure with visualized dashboards, automated monitoring and alerting and detailed reporting.</p>
                </motion.div>

                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className='w-full md:h-[270px] lg:h-auto rounded-[20px] bg-[#F5F5F5] p-5 lg:p-7'>
                    <span className=' flex flex-col md:flex-row items-start md:items-center md:space-x-3'>
                        <img 
                        src={ benesix }
                        alt="" />
                        <p className=' font-medium text-xl'>24/7/365 DevOps support.</p>
                    </span>
                    <p className=' text-[#121212CC] text-base mt-2'>Free your IT team from ongoing maintenance. we deliver around-the-clock, proactive monitoring and support, and seamless upgrades, backed by our industry-best uptime SLAs.</p>
                </motion.div>

            </div>
        </div>
        </>
     );
}
  
export default Features;