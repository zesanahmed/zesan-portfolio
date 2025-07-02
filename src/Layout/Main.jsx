import { Link, Outlet } from "react-router-dom";
import profile from "../assets/profile/profile.jpg"
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiUserList } from "react-icons/pi";
import { BiBriefcase } from "react-icons/bi";
import { TbBook2 } from "react-icons/tb";
import { MdOutlineContactMail } from "react-icons/md";

const Main = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu w-52 min-h-full bg-zinc-200 text-base-content ">
                        {/* Sidebar content here */}
                        <div className="relative">
                            <img src={profile} alt="" />
                            <p className="bg-sky-400 text-white text-center text-2xl font-bold h-11 pt-1 absolute bottom-0 w-full opacity-90">Zesan Ahmed</p>
                        </div>
                        <li><Link to="/"><AiOutlineHome className="text-xl" /> HOME</Link></li>
                        <li><Link to="/about"><CgProfile className="text-xl" /> ABOUT ME</Link></li>
                        <li><Link to="/resume"><PiUserList className="text-xl" /> RESUME</Link></li>
                        <li><Link to="portfolio"><BiBriefcase className="text-xl" /> PORTFOLIO</Link></li>
                        <li><Link to="/blog"><TbBook2 className="text-xl" /> BLOG</Link></li>
                        <li><Link to="/contact"><MdOutlineContactMail className="text-xl" /> CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;