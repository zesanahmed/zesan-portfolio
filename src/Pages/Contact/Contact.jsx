import { MdOutlineContactMail } from "react-icons/md";
import ContactForm from "./ContactForm";

const Resume = () => {
  const divStyle = {
    backgroundColor: '#2c2d2f',
};
    return (
        <div style={divStyle} className=" text-white p-16" >
            <div className="flex justify-between">
                <h2 className="text-4xl text-sky-600 font-bold">Contact Me.</h2>
                <MdOutlineContactMail className="text-4xl text-sky-600" />
            </div>
            <hr className="mt-2" />
            <ContactForm/>
        </div >
    );
};

export default Resume;

 