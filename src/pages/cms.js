import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import menu from './assets/menu.svg';
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../contexts/contextprovider";
import BlogAdmin from "../adminComps/blog";
import EventsAdmin from "../adminComps/events";
import ResoucesAdmin from "../adminComps/resources";
import SolutionsAdmin from "../adminComps/solutions";
import Cases from "../adminComps/cases";

const Cms = () => {

    const Navigate = useNavigate();
    const [page, setPage] = useContext(PageContext);

    useEffect(() => {
        const menuBtn = document.getElementById('menu');
        const overlay = document.getElementById('overlay');

        const handleMenuClick = () => {
            const isClose = overlay.classList.contains('-translate-x-[100%]');
            if (isClose) {
                overlay.classList.remove('-translate-x-[100%]');
            } else {
                overlay.classList.add('-translate-x-[100%]');
            }
        };

        menuBtn.addEventListener('click', handleMenuClick);

        // Clean up the event listener when the component unmounts
        return () => {
            menuBtn.removeEventListener('click', handleMenuClick);
        };
    }, []);

    

    useEffect(()=>{
        const blog = document.getElementById('blog');
        const events = document.getElementById('events');
        const resources = document.getElementById('resources');
        const solutions = document.getElementById('solutions');
        const cases = document.getElementById('cases');

        if(page === 'Blog'){
            blog.style.display = 'block';
            events.style.display = 'none';
            events.style.display = 'none';
            solutions.style.display = 'none';
            cases.style.display = 'none';
        }
        else if(page === 'Events'){
            blog.style.display = 'none';
            events.style.display = 'block';
            resources.style.display = 'none';
            solutions.style.display = 'none';
            cases.style.display = 'none';
        }
        else if(page === 'Resources'){
            blog.style.display = 'none';
            events.style.display = 'none';
            resources.style.display = 'block';
            solutions.style.display = 'none';
            cases.style.display = 'none';
        }
        else if(page === 'Solutions'){
            blog.style.display = 'none';
            events.style.display = 'none';
            resources.style.display = 'none';
            solutions.style.display = 'block';
            cases.style.display = 'none';
        }
        else if(page === 'Use Cases'){
            blog.style.display = 'none';
            events.style.display = 'none';
            resources.style.display = 'none';
            solutions.style.display = 'none';
            cases.style.display = 'block';
        }
    })

    useEffect(() => {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('-translate-x-[100%]');
    }, [page]);

    return ( 
        <>
        <div id="overlay" className='-translate-x-[100%] md:-translate-x-0 transition-all duration-500 w-[80%] md:w-[10%] lg:w-[20%] h-[100vh] py-3 px-3 md:px-5 fixed top-0 left-0 bg-[#f1f1f1] md:bg-transparent z-[999]'>
            <Sidebar />
        </div>
        <div className=' w-[100%]'>
            <img src={ menu } id="menu" className=" block md:hidden fixed z-[999] top-8 left-4 w-6 h-6" alt="" />
            <Topbar/>
            <div id="blog" className=" md:left-[10%] lg:left-[20%] top-[80px] w-full md:w-[90%] lg:w-[80%] absolute py-6 px-3 md:px-6 ">
                <p className=" font-Outfit text-xl md:text-3xl  font-medium text-[#666] -mt-3 mb-3">{ page }</p>
                <BlogAdmin/>
            </div>
            <div id="events" className=" md:left-[10%] lg:left-[20%] top-[80px] w-full md:w-[90%] lg:w-[80%] absolute py-6 px-3 md:px-6 ">
                <p className=" font-Outfit text-xl md:text-3xl  font-medium text-[#666] -mt-3 mb-3">{ page }</p>
                <EventsAdmin/>
            </div>
            <div id="resources" className=" md:left-[10%] lg:left-[20%] top-[80px] w-full md:w-[90%] lg:w-[80%] absolute py-6 px-3 md:px-6 ">
                <p className=" font-Outfit text-xl md:text-3xl  font-medium text-[#666] -mt-3 mb-3">{ page }</p>
                <ResoucesAdmin/>
            </div>
            <div id="solutions" className=" md:left-[10%] lg:left-[20%] top-[80px] w-full md:w-[90%] lg:w-[80%] absolute py-6 px-3 md:px-6 ">
                <p className=" font-Outfit text-xl md:text-3xl  font-medium text-[#666] -mt-3 mb-3">{ page }</p>
                <SolutionsAdmin/>
            </div>
            <div id="cases" className=" md:left-[10%] lg:left-[20%] top-[80px] w-full md:w-[90%] lg:w-[80%] absolute py-6 px-3 md:px-6 ">
                <p className=" font-Outfit text-xl md:text-3xl  font-medium text-[#666] -mt-3 mb-3">{ page }</p>
                <Cases/>
            </div>
        </div>
        </>
     );
}
 
export default Cms;